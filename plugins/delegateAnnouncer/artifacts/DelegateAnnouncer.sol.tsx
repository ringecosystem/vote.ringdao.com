import { Abi, Hex } from "viem";
export const DelegateAnnouncerAbi: Abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "AnnounceDelegation",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "announceDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const DelegateAnnouncerBytecode: Hex =
  "0x608060405234801561000f575f80fd5b506102878061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063d23c1ecf1461002d575b5f80fd5b61004760048036038101906100429190610178565b610049565b005b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fffdfbae4733d5c1569c55fca767b6e2750132b7189a47f8d5e3d5ff7f8433a9f84846040516100a892919061022f565b60405180910390a3505050565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100e6826100bd565b9050919050565b6100f6816100dc565b8114610100575f80fd5b50565b5f81359050610111816100ed565b92915050565b5f80fd5b5f80fd5b5f80fd5b5f8083601f84011261013857610137610117565b5b8235905067ffffffffffffffff8111156101555761015461011b565b5b6020830191508360018202830111156101715761017061011f565b5b9250929050565b5f805f6040848603121561018f5761018e6100b5565b5b5f61019c86828701610103565b935050602084013567ffffffffffffffff8111156101bd576101bc6100b9565b5b6101c986828701610123565b92509250509250925092565b5f82825260208201905092915050565b828183375f83830152505050565b5f601f19601f8301169050919050565b5f61020e83856101d5565b935061021b8385846101e5565b610224836101f3565b840190509392505050565b5f6020820190508181035f830152610248818486610203565b9050939250505056fea264697066735822122077c690baf22bb9a678897056143429edeec96d3566ab10d6db729c50c0142efc64736f6c63430008180033";
