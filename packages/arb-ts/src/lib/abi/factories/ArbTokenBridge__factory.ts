/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { ArbTokenBridge } from '../ArbTokenBridge'

export class ArbTokenBridge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _l1Pair: string,
    _templateERC777: string,
    _templateERC20: string,
    overrides?: Overrides
  ): Promise<ArbTokenBridge> {
    return super.deploy(
      _l1Pair,
      _templateERC777,
      _templateERC20,
      overrides || {}
    ) as Promise<ArbTokenBridge>
  }
  getDeployTransaction(
    _l1Pair: string,
    _templateERC777: string,
    _templateERC20: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _l1Pair,
      _templateERC777,
      _templateERC20,
      overrides || {}
    )
  }
  attach(address: string): ArbTokenBridge {
    return super.attach(address) as ArbTokenBridge
  }
  connect(signer: Signer): ArbTokenBridge__factory {
    return super.connect(signer) as ArbTokenBridge__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbTokenBridge {
    return new Contract(address, _abi, signerOrProvider) as ArbTokenBridge
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Pair',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_templateERC777',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_templateERC20',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateBridgedERC20Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateBridgedERC777Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'customToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'customTokenRegistered',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Pair',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mintCustomtokenFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'mintERC20FromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'mintERC777FromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'templateERC20',
    outputs: [
      {
        internalType: 'contract ICloneable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'templateERC777',
    outputs: [
      {
        internalType: 'contract ICloneable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'updateERC20TokenInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
    ],
    name: 'updateERC777TokenInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60e060405234801561001057600080fd5b5060405161133b38038061133b8339818101604052606081101561003357600080fd5b50805160208201516040909201519091906001600160a01b03831661009f576040805162461bcd60e51b815260206004820152601a60248201527f4c3120706169722063616e277420626520616464726573732030000000000000604482015290519081900360640190fd5b6001600160601b0319606082811b821660805283811b821660a05284901b1660c0526001600160a01b0390811692918116911661120f61012c6000398061067f52806106e1528061082c528061092b52806109c65280610adf5280610c665280610d645250806104765280610dd45280610f195250806106a852806108fe5280610f3f525061120f6000f3fe608060405234801561001057600080fd5b50600436106100ca5760003560e01c8063998ea6261161007c578063998ea626146102195780639de96c5c146102215780639fe12fe31461024f578063c95a674f14610320578063d9caed1214610360578063eb98b7cd14610396578063fa09eb4514610467576100ca565b8063123170aa146100cf57806329fd79e91461011157806334fcff0c146101375780634b805f48146101755780635f292aaa1461017d5780636afcf1cc146101a357806380753774146101d9575b600080fd5b6100f5600480360360208110156100e557600080fd5b50356001600160a01b031661046f565b604080516001600160a01b039092168252519081900360200190f35b6100f56004803603602081101561012757600080fd5b50356001600160a01b03166104aa565b6101736004803603608081101561014d57600080fd5b506001600160a01b038135811691602081013582169160408201351690606001356104c5565b005b6100f561067d565b6100f56004803603602081101561019357600080fd5b50356001600160a01b03166106a1565b610173600480360360608110156101b957600080fd5b506001600160a01b038135811691602081013590911690604001356106d6565b610173600480360360808110156101ef57600080fd5b5080356001600160a01b03908116916020810135909116906040810135906060013560ff16610821565b6100f56108fc565b6101736004803603604081101561023757600080fd5b506001600160a01b0381358116916020013516610920565b6101736004803603608081101561026557600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561028f57600080fd5b8201836020820111156102a157600080fd5b803590602001918460018302840111600160201b831117156102c257600080fd5b919390929091602081019035600160201b8111156102df57600080fd5b8201836020820111156102f157600080fd5b803590602001918460018302840111600160201b8311171561031257600080fd5b91935091503560ff166109bb565b6101736004803603608081101561033657600080fd5b5080356001600160a01b03908116916020810135909116906040810135906060013560ff16610ad4565b6101736004803603606081101561037657600080fd5b506001600160a01b03813581169160208101359091169060400135610b4d565b610173600480360360808110156103ac57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156103d657600080fd5b8201836020820111156103e857600080fd5b803590602001918460018302840111600160201b8311171561040957600080fd5b919390929091602081019035600160201b81111561042657600080fd5b82018360208201111561043857600080fd5b803590602001918460018302840111600160201b8311171561045957600080fd5b91935091503560ff16610d59565b6100f5610dd2565b60006104a47f00000000000000000000000000000000000000000000000000000000000000006001600160a01b038416610df6565b92915050565b6000602081905290815260409020546001600160a01b031681565b836104cf8161046f565b6001600160a01b0316336001600160a01b0316148061050757506104f2816106a1565b6001600160a01b0316336001600160a01b0316145b610552576040805162461bcd60e51b81526020600482015260176024820152762727aa2fa32927a6afa9aa20a72220a9222faa27a5a2a760491b604482015290519081900360640190fd5b848461055d8261046f565b6001600160a01b0316816001600160a01b031614806105955750610580826106a1565b6001600160a01b0316816001600160a01b0316145b806105bc57506001600160a01b038083166000908152602081905260409020548282169116145b6105fc576040805162461bcd60e51b815260206004820152600c60248201526b2727aa2faa27afaa27a5a2a760a11b604482015290519081900360640190fd5b856001600160a01b0316638c2a993e86866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561065c57600080fd5b505af1158015610670573d6000803e3d6000fd5b5050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006104a47f00000000000000000000000000000000000000000000000000000000000000006001600160a01b038416610df6565b326001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610743576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b6001600160a01b0380841660009081526020819052604090205416806107b0576040805162461bcd60e51b815260206004820152601a60248201527f437573746f6d20546f6b656e20646f65736e2774206578697374000000000000604482015290519081900360640190fd5b604080516346154c9f60e11b81526001600160a01b0385811660048301526024820185905291518392831691638c2a993e91604480830192600092919082900301818387803b15801561080257600080fd5b505af1158015610816573d6000803e3d6000fd5b505050505050505050565b326001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461088e576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b600061089a8583610e19565b9050806001600160a01b0316638c2a993e85856040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561080257600080fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b326001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461098d576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b6001600160a01b03918216600090815260208190526040902080546001600160a01b03191691909216179055565b326001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a28576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b6000610a348783610e19565b9050806001600160a01b03166347d5a091878787876040518563ffffffff1660e01b81526004018080602001806020018381038352878782818152602001925080828437600083820152601f01601f191690910184810383528581526020019050858580828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561065c57600080fd5b326001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b41576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b600061089a8583610e27565b82610b578161046f565b6001600160a01b0316336001600160a01b03161480610b8f5750610b7a816106a1565b6001600160a01b0316336001600160a01b0316145b80610bb357506001600160a01b038181166000908152602081905260409020541633145b610bf5576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afaa27a5a2a760911b604482015290519081900360640190fd5b600154604080516024808201939093526001600160a01b0387811660448084019190915287821660648481019190915260848085018990528551808603909101815260a490940185526020840180516001600160e01b031663e0a345fd60e01b17815285516349460b4d60e11b81527f0000000000000000000000000000000000000000000000000000000000000000948516600482019081529781019687528551938101939093528451919663928c169a9694959490939092908801919080838360005b83811015610cd2578181015183820152602001610cba565b50505050905090810190601f168015610cff5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b158015610d1f57600080fd5b505af1158015610d33573d6000803e3d6000fd5b505050506040513d6020811015610d4957600080fd5b5050600180548101905550505050565b326001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610dc6576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b6000610a348783610e27565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610e126001600160a01b038416833063ffffffff610e3516565b9392505050565b6000610e1283836000610e93565b6000610e1283836001610e93565b604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b8152606093841b60148201526f5af43d82803e903d91602b57fd5bf3ff60801b6028820152921b6038830152604c8201526037808220606c830152605591012090565b6001600160a01b038084166000908152602081905260408120549091168015610ebd579050610e12565b600080846001811115610ecc57fe5b14610edf57610eda8661046f565b610ee8565b610ee8866106a1565b9050610efc816001600160a01b0316611007565b610ffe576000610f6e81866001811115610f1257fe5b14610f3d577f0000000000000000000000000000000000000000000000000000000000000000610f5f565b7f00000000000000000000000000000000000000000000000000000000000000005b6001600160a01b03891661100d565b9050816001600160a01b0316816001600160a01b031614610f8b57fe5b604080516244919560e91b81523060048201526001600160a01b03898116602483015260ff891660448301529151918416916389232a009160648082019260009290919082900301818387803b158015610fe457600080fd5b505af1158015610ff8573d6000803e3d6000fd5b50505050505b95945050505050565b3b151590565b6000826001600160a01b0316636f791d296040518163ffffffff1660e01b815260040160206040518083038186803b15801561104857600080fd5b505afa15801561105c573d6000803e3d6000fd5b505050506040513d602081101561107257600080fd5b505160408051808201909152600c81526b21a627a722afa6a0a9aa22a960a11b6020820152906111205760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156110e55781810151838201526020016110cd565b50505050905090810190601f1680156111125780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610e126001600160a01b0384168363ffffffff61113a16565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528360601b60148201526e5af43d82803e903d91602b57fd5bf360881b6028820152826037826000f59150506001600160a01b0381166104a4576040805162461bcd60e51b8152602060048201526017602482015276115490cc4c4d8dce8818dc99585d194c8819985a5b1959604a1b604482015290519081900360640190fdfea2646970667358221220fa2bd61dc38ce2f623f9734b64b22d036dcd8b675991c61688bc42a7ede62cd964736f6c634300060b0033'
