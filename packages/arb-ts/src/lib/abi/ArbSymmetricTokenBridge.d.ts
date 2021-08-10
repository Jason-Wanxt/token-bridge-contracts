/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface ArbSymmetricTokenBridgeInterface extends ethers.utils.Interface {
  functions: {
    'calculateBridgedERC20Address(address)': FunctionFragment
    'calculateBridgedERC777Address(address)': FunctionFragment
    'customToken(address)': FunctionFragment
    'customTokenRegistered(address,address)': FunctionFragment
    'l1Pair()': FunctionFragment
    'migrate(address,address,address,uint256)': FunctionFragment
    'mintCustomtokenFromL1(address,address,uint256)': FunctionFragment
    'mintERC20FromL1(address,address,uint256,uint8)': FunctionFragment
    'mintERC777FromL1(address,address,uint256,uint8)': FunctionFragment
    'templateERC20()': FunctionFragment
    'templateERC777()': FunctionFragment
    'updateERC20TokenInfo(address,string,string,uint8)': FunctionFragment
    'updateERC777TokenInfo(address,string,string,uint8)': FunctionFragment
    'withdraw(address,address,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateBridgedERC20Address',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'calculateBridgedERC777Address',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'customToken', values: [string]): string
  encodeFunctionData(
    functionFragment: 'customTokenRegistered',
    values: [string, string]
  ): string
  encodeFunctionData(functionFragment: 'l1Pair', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'migrate',
    values: [string, string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'mintCustomtokenFromL1',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'mintERC20FromL1',
    values: [string, string, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'mintERC777FromL1',
    values: [string, string, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'templateERC20',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'templateERC777',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'updateERC20TokenInfo',
    values: [string, string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'updateERC777TokenInfo',
    values: [string, string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [string, string, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'calculateBridgedERC20Address',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'calculateBridgedERC777Address',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'customToken', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'customTokenRegistered',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'l1Pair', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'mintCustomtokenFromL1',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'mintERC20FromL1',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'mintERC777FromL1',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'templateERC20',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'templateERC777',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'updateERC20TokenInfo',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'updateERC777TokenInfo',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result

  events: {}
}

export class ArbSymmetricTokenBridge extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ArbSymmetricTokenBridgeInterface

  functions: {
    calculateBridgedERC20Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'calculateBridgedERC20Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    calculateBridgedERC777Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'calculateBridgedERC777Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    customToken(arg0: string, overrides?: CallOverrides): Promise<[string]>

    'customToken(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    l1Pair(overrides?: CallOverrides): Promise<[string]>

    'l1Pair()'(overrides?: CallOverrides): Promise<[string]>

    migrate(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    mintCustomtokenFromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'mintCustomtokenFromL1(address,address,uint256)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    mintERC20FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'mintERC20FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    mintERC777FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'mintERC777FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    templateERC20(overrides?: CallOverrides): Promise<[string]>

    'templateERC20()'(overrides?: CallOverrides): Promise<[string]>

    templateERC777(overrides?: CallOverrides): Promise<[string]>

    'templateERC777()'(overrides?: CallOverrides): Promise<[string]>

    updateERC20TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'updateERC20TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    updateERC777TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'updateERC777TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    withdraw(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'withdraw(address,address,uint256)'(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  calculateBridgedERC20Address(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  'calculateBridgedERC20Address(address)'(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  calculateBridgedERC777Address(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  'calculateBridgedERC777Address(address)'(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  customToken(arg0: string, overrides?: CallOverrides): Promise<string>

  'customToken(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>

  customTokenRegistered(
    l1Address: string,
    l2Address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'customTokenRegistered(address,address)'(
    l1Address: string,
    l2Address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  l1Pair(overrides?: CallOverrides): Promise<string>

  'l1Pair()'(overrides?: CallOverrides): Promise<string>

  migrate(
    l1ERC20: string,
    target: string,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'migrate(address,address,address,uint256)'(
    l1ERC20: string,
    target: string,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  mintCustomtokenFromL1(
    l1ERC20: string,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'mintCustomtokenFromL1(address,address,uint256)'(
    l1ERC20: string,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  mintERC20FromL1(
    l1ERC20: string,
    account: string,
    amount: BigNumberish,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'mintERC20FromL1(address,address,uint256,uint8)'(
    l1ERC20: string,
    account: string,
    amount: BigNumberish,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  mintERC777FromL1(
    l1ERC20: string,
    account: string,
    amount: BigNumberish,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'mintERC777FromL1(address,address,uint256,uint8)'(
    l1ERC20: string,
    account: string,
    amount: BigNumberish,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  templateERC20(overrides?: CallOverrides): Promise<string>

  'templateERC20()'(overrides?: CallOverrides): Promise<string>

  templateERC777(overrides?: CallOverrides): Promise<string>

  'templateERC777()'(overrides?: CallOverrides): Promise<string>

  updateERC20TokenInfo(
    l1ERC20: string,
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'updateERC20TokenInfo(address,string,string,uint8)'(
    l1ERC20: string,
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  updateERC777TokenInfo(
    l1ERC20: string,
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'updateERC777TokenInfo(address,string,string,uint8)'(
    l1ERC20: string,
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  withdraw(
    l1ERC20: string,
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'withdraw(address,address,uint256)'(
    l1ERC20: string,
    destination: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    calculateBridgedERC20Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    'calculateBridgedERC20Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    calculateBridgedERC777Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    'calculateBridgedERC777Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    customToken(arg0: string, overrides?: CallOverrides): Promise<string>

    'customToken(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: CallOverrides
    ): Promise<void>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: CallOverrides
    ): Promise<void>

    l1Pair(overrides?: CallOverrides): Promise<string>

    'l1Pair()'(overrides?: CallOverrides): Promise<string>

    migrate(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    mintCustomtokenFromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'mintCustomtokenFromL1(address,address,uint256)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    mintERC20FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'mintERC20FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    mintERC777FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'mintERC777FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    templateERC20(overrides?: CallOverrides): Promise<string>

    'templateERC20()'(overrides?: CallOverrides): Promise<string>

    templateERC777(overrides?: CallOverrides): Promise<string>

    'templateERC777()'(overrides?: CallOverrides): Promise<string>

    updateERC20TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'updateERC20TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    updateERC777TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'updateERC777TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    withdraw(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'withdraw(address,address,uint256)'(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    calculateBridgedERC20Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateBridgedERC20Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    calculateBridgedERC777Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateBridgedERC777Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    customToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'customToken(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    l1Pair(overrides?: CallOverrides): Promise<BigNumber>

    'l1Pair()'(overrides?: CallOverrides): Promise<BigNumber>

    migrate(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    mintCustomtokenFromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'mintCustomtokenFromL1(address,address,uint256)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    mintERC20FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'mintERC20FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    mintERC777FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'mintERC777FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    templateERC20(overrides?: CallOverrides): Promise<BigNumber>

    'templateERC20()'(overrides?: CallOverrides): Promise<BigNumber>

    templateERC777(overrides?: CallOverrides): Promise<BigNumber>

    'templateERC777()'(overrides?: CallOverrides): Promise<BigNumber>

    updateERC20TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'updateERC20TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    updateERC777TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'updateERC777TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    withdraw(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'withdraw(address,address,uint256)'(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    calculateBridgedERC20Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateBridgedERC20Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    calculateBridgedERC777Address(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateBridgedERC777Address(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    customToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'customToken(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    customTokenRegistered(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'customTokenRegistered(address,address)'(
      l1Address: string,
      l2Address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    l1Pair(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'l1Pair()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    migrate(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'migrate(address,address,address,uint256)'(
      l1ERC20: string,
      target: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    mintCustomtokenFromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'mintCustomtokenFromL1(address,address,uint256)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    mintERC20FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'mintERC20FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    mintERC777FromL1(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'mintERC777FromL1(address,address,uint256,uint8)'(
      l1ERC20: string,
      account: string,
      amount: BigNumberish,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    templateERC20(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'templateERC20()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    templateERC777(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'templateERC777()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    updateERC20TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'updateERC20TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    updateERC777TokenInfo(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'updateERC777TokenInfo(address,string,string,uint8)'(
      l1ERC20: string,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    withdraw(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'withdraw(address,address,uint256)'(
      l1ERC20: string,
      destination: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
