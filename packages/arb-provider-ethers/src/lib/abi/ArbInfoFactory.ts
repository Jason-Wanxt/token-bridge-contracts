/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers'
import { Provider } from 'ethers/providers'
import { UnsignedTransaction } from 'ethers/utils/transaction'

import { ArbInfo } from './ArbInfo'

export class ArbInfoFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(): Promise<ArbInfo> {
    return super.deploy() as Promise<ArbInfo>
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction()
  }
  attach(address: string): ArbInfo {
    return super.attach(address) as ArbInfo
  }
  connect(signer: Signer): ArbInfoFactory {
    return super.connect(signer) as ArbInfoFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbInfo {
    return new Contract(address, _abi, signerOrProvider) as ArbInfo
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getCode',
    outputs: [
      {
        name: 'o_code',
        type: 'bytes',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506101d1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637e105ce21461003b578063f8b2cb4f146100f8575b600080fd5b61007d6004803603602081101561005157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610150565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100bd5780820151818401526020810190506100a2565b50505050905090810190601f1680156100ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61013a6004803603602081101561010e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061017b565b6040518082815260200191505060405180910390f35b6060813b6040519150601f19601f602083010116820160405280825280600060208401853c50919050565b60008173ffffffffffffffffffffffffffffffffffffffff1631905091905056fea265627a7a723058204d535347e20eafe4ec6764f55821bc55974d573e7b6ed6eddac1d9a447889b9264736f6c634300050a0032'
