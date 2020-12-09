/*
 * Copyright 2019-2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package evm

import (
	"fmt"
	ethcommon "github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/offchainlabs/arbitrum/packages/arb-evm/message"
	"github.com/offchainlabs/arbitrum/packages/arb-util/common"
	"github.com/offchainlabs/arbitrum/packages/arb-util/inbox"
	"github.com/offchainlabs/arbitrum/packages/arb-util/value"
	"github.com/pkg/errors"
	"math/big"
)

type ResultType int

const (
	ReturnCode               ResultType = 0
	RevertCode               ResultType = 1
	CongestionCode           ResultType = 2
	InsufficientGasFundsCode ResultType = 3
	InsufficientTxFundsCode  ResultType = 4
	BadSequenceCode          ResultType = 5
	InvalidMessageFormatCode ResultType = 6
	ContractAlreadyExists    ResultType = 7
	UnknownErrorCode         ResultType = 255
)

type Result interface {
	AsValue() value.Value
}

type TxResult struct {
	IncomingRequest IncomingRequest
	ResultCode      ResultType
	ReturnData      []byte
	EVMLogs         []Log
	GasUsed         *big.Int
	GasPrice        *big.Int
	CumulativeGas   *big.Int
	TxIndex         *big.Int
	StartLogIndex   *big.Int
}

func (r *TxResult) String() string {
	return fmt.Sprintf(
		"TxResult(%v, %v, %v, %v, %v, %v)",
		r.IncomingRequest,
		r.ResultCode,
		hexutil.Encode(r.ReturnData),
		r.EVMLogs,
		r.GasUsed,
		r.GasPrice,
	)
}

func (r *TxResult) AsValue() value.Value {
	// Static slice correct size, so error can be ignored
	resultInfo, _ := value.NewTupleFromSlice([]value.Value{
		value.NewInt64Value(int64(r.ResultCode)),
		inbox.BytesToByteStack(r.ReturnData),
		LogsToLogStack(r.EVMLogs),
	})

	// Static slice correct size, so error can be ignored
	chainInfo, _ := value.NewTupleFromSlice([]value.Value{
		value.NewIntValue(r.CumulativeGas),
		value.NewIntValue(r.TxIndex),
		value.NewIntValue(r.StartLogIndex),
	})

	// Static slice correct size, so error can be ignored
	tup, _ := value.NewTupleFromSlice([]value.Value{
		value.NewInt64Value(0),
		r.IncomingRequest.AsValue(),
		resultInfo,
		value.NewTuple2(
			value.NewIntValue(r.GasUsed),
			value.NewIntValue(r.GasPrice),
		),
		chainInfo,
	})
	return tup
}

func (r *TxResult) EthLogs(blockHash common.Hash) []*types.Log {
	evmLogs := make([]*types.Log, 0, len(r.EVMLogs))
	logIndex := r.StartLogIndex.Uint64()
	for _, l := range r.EVMLogs {
		ethLog := &types.Log{
			Address:     l.Address.ToEthAddress(),
			Topics:      common.NewEthHashesFromHashes(l.Topics),
			Data:        l.Data,
			BlockNumber: r.IncomingRequest.ChainTime.BlockNum.AsInt().Uint64(),
			TxHash:      r.IncomingRequest.MessageID.ToEthHash(),
			TxIndex:     uint(r.TxIndex.Uint64()),
			BlockHash:   blockHash.ToEthHash(),
			Index:       uint(logIndex),
		}
		logIndex++
		evmLogs = append(evmLogs, ethLog)
	}
	return evmLogs
}

func (r *TxResult) ToEthReceipt(blockHash common.Hash) *types.Receipt {
	contractAddress := ethcommon.Address{}
	if r.IncomingRequest.Kind == message.L2Type && r.ResultCode == ReturnCode {
		msg, err := message.L2Message{Data: r.IncomingRequest.Data}.AbstractMessage()
		if err == nil {
			if msg, ok := msg.(message.AbstractTransaction); ok {
				emptyAddress := common.Address{}
				if msg.Destination() == emptyAddress {
					copy(contractAddress[:], r.ReturnData[12:])
				}
			}
		}
	}

	status := uint64(0)
	if r.ResultCode == ReturnCode {
		status = 1
	}

	evmLogs := r.EthLogs(blockHash)
	return &types.Receipt{
		PostState:         []byte{0},
		Status:            status,
		CumulativeGasUsed: r.CumulativeGas.Uint64(),
		Bloom:             types.BytesToBloom(types.LogsBloom(evmLogs)),
		Logs:              evmLogs,
		TxHash:            r.IncomingRequest.MessageID.ToEthHash(),
		ContractAddress:   contractAddress,
		GasUsed:           r.GasUsed.Uint64(),
		BlockHash:         blockHash.ToEthHash(),
		BlockNumber:       r.IncomingRequest.ChainTime.BlockNum.AsInt(),
		TransactionIndex:  uint(r.TxIndex.Uint64()),
	}
}

func parseTxResult(l1MsgVal value.Value, resultInfo value.Value, gasInfo value.Value, chainInfo value.Value) (*TxResult, error) {
	resultTup, ok := resultInfo.(*value.TupleValue)
	if !ok || resultTup.Len() != 3 {
		return nil, errors.Errorf("advise expected result info tuple of length 3, but recieved %v", resultTup)
	}

	// Tuple size already verified above, so error can be ignored
	resultCode, _ := resultTup.GetByInt64(0)
	returnData, _ := resultTup.GetByInt64(1)
	evmLogs, _ := resultTup.GetByInt64(2)

	gasInfoTup, ok := gasInfo.(*value.TupleValue)
	if !ok || gasInfoTup.Len() != 2 {
		return nil, errors.Errorf("advise expected gas info tuple of length 2, but recieved %v", gasInfoTup)
	}

	// Tuple size already verified above, so error can be ignored
	gasUsed, _ := gasInfoTup.GetByInt64(0)
	gasPrice, _ := gasInfoTup.GetByInt64(1)

	chainInfoTup, ok := chainInfo.(*value.TupleValue)
	if !ok || chainInfoTup.Len() != 3 {
		return nil, errors.Errorf("advise expected tx block data tuple of length 3, but recieved %v", resultTup)
	}

	// Tuple size already verified above, so error can be ignored
	cumulativeGas, _ := chainInfoTup.GetByInt64(0)
	txIndex, _ := chainInfoTup.GetByInt64(1)
	startLogIndex, _ := chainInfoTup.GetByInt64(2)

	l1Msg, err := NewIncomingRequestFromValue(l1MsgVal)
	if err != nil {
		return nil, err
	}
	returnBytes, err := inbox.ByteStackToHex(returnData)
	if err != nil {
		return nil, errors.Wrap(err, "umarshalling return data")
	}
	logs, err := LogStackToLogs(evmLogs)
	if err != nil {
		return nil, errors.Wrap(err, "unmarshaling logs")
	}
	resultCodeInt, ok := resultCode.(value.IntValue)
	if !ok {
		return nil, errors.New("resultCode must be an int")
	}
	gasUsedInt, ok := gasUsed.(value.IntValue)
	if !ok {
		return nil, errors.New("gasUsed must be an int")
	}
	gasPriceInt, ok := gasPrice.(value.IntValue)
	if !ok {
		return nil, errors.New("gasPrice must be an int")
	}
	cumulativeGasInt, ok := cumulativeGas.(value.IntValue)
	if !ok {
		return nil, errors.New("cumulativeGas must be an int")
	}
	txIndexInt, ok := txIndex.(value.IntValue)
	if !ok {
		return nil, errors.New("txIndex must be an int")
	}
	startLogIndexInt, ok := startLogIndex.(value.IntValue)
	if !ok {
		return nil, errors.New("startLogIndex must be an int")
	}

	return &TxResult{
		IncomingRequest: l1Msg,
		ResultCode:      ResultType(resultCodeInt.BigInt().Uint64()),
		ReturnData:      returnBytes,
		EVMLogs:         logs,
		GasUsed:         gasUsedInt.BigInt(),
		GasPrice:        gasPriceInt.BigInt(),
		CumulativeGas:   cumulativeGasInt.BigInt(),
		TxIndex:         txIndexInt.BigInt(),
		StartLogIndex:   startLogIndexInt.BigInt(),
	}, nil
}

func NewResultFromValue(val value.Value) (Result, error) {
	tup, ok := val.(*value.TupleValue)
	if !ok || tup.Len() == 0 {
		return nil, errors.New("expected result to be nonempty tuple")
	}

	// Tuple size already verified above, so error can be ignored
	kind, _ := tup.GetByInt64(0)
	kindInt, ok := kind.(value.IntValue)
	if !ok {
		return nil, errors.New(" result kind must be an int")
	}

	if kindInt.BigInt().Uint64() == 0 {
		if tup.Len() != 5 {
			return nil, errors.Errorf("tx result expected tuple of length 5, but recieved len %v: %v", tup.Len(), tup)
		}

		// Tuple size already verified above, so error can be ignored
		l1MsgVal, _ := tup.GetByInt64(1)
		resultInfo, _ := tup.GetByInt64(2)
		gasInfo, _ := tup.GetByInt64(3)
		chainInfo, _ := tup.GetByInt64(4)
		return parseTxResult(l1MsgVal, resultInfo, gasInfo, chainInfo)
	} else if kindInt.BigInt().Uint64() == 1 {
		if tup.Len() != 6 {
			return nil, errors.Errorf("tx result expected tuple of length 6, but received len %v: %v", tup.Len(), tup)
		}

		// Tuple size already verified above, so error can be ignored
		blockNum, _ := tup.GetByInt64(1)
		timestamp, _ := tup.GetByInt64(2)
		gasLimit, _ := tup.GetByInt64(3)
		blockStatsRaw, _ := tup.GetByInt64(4)
		chainStatsRaw, _ := tup.GetByInt64(5)

		return parseBlockResult(blockNum, timestamp, gasLimit, blockStatsRaw, chainStatsRaw)
	} else {
		return nil, errors.New("unknown result kind")
	}
}

func NewTxResultFromValue(val value.Value) (*TxResult, error) {
	res, err := NewResultFromValue(val)
	if err != nil {
		return nil, err
	}
	txRes, ok := res.(*TxResult)
	if !ok {
		return nil, errors.New("got block result but expected transaction")
	}
	return txRes, nil
}

func NewRandomResult(logCount int32) *TxResult {
	logs := make([]Log, 0, logCount)
	for i := int32(0); i < logCount; i++ {
		logs = append(logs, NewRandomLog(3))
	}
	return &TxResult{
		IncomingRequest: NewRandomIncomingRequest(),
		ResultCode:      ReturnCode,
		ReturnData:      common.RandBytes(200),
		EVMLogs:         logs,
		GasUsed:         common.RandBigInt(),
		GasPrice:        common.RandBigInt(),
		CumulativeGas:   common.RandBigInt(),
		TxIndex:         common.RandBigInt(),
		StartLogIndex:   common.RandBigInt(),
	}
}
