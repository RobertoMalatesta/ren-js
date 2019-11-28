/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import Contract, { contractOptions } from "web3/eth/contract";
import { EventLog, Callback, EventEmitter } from "web3/types";
import { TransactionObject, BlockType } from "web3/eth/types";
import { ContractEvent } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class BTCShifter extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: contractOptions
  );
  clone(): BTCShifter;
  address: string;
  methods: {
    updateMintAuthority(_nextMintAuthority: string): TransactionObject<void>;

    claimTokenOwnership(): TransactionObject<void>;

    transferTokenOwnership(_nextTokenOwner: string): TransactionObject<void>;

    updateFee(_nextFee: number | string): TransactionObject<void>;

    feeRecipient(): TransactionObject<string>;

    hashForSignature(
      _pHash: string | number[],
      _amount: number | string,
      _to: string,
      _nHash: string | number[]
    ): TransactionObject<string>;

    status(arg0: string | number[]): TransactionObject<boolean>;

    version(): TransactionObject<BN>;

    renounceOwnership(): TransactionObject<void>;

    shiftOut(
      _to: string | number[],
      _amount: number | string
    ): TransactionObject<BN>;

    minShiftAmount(): TransactionObject<BN>;

    owner(): TransactionObject<string>;

    isOwner(): TransactionObject<boolean>;

    mintAuthority(): TransactionObject<string>;

    nextShiftID(): TransactionObject<BN>;

    shiftIn(
      _pHash: string | number[],
      _amount: number | string,
      _nHash: string | number[],
      _sig: string | number[]
    ): TransactionObject<BN>;

    verifySignature(
      _signedMessageHash: string | number[],
      _sig: string | number[]
    ): TransactionObject<boolean>;

    fee(): TransactionObject<BN>;

    updateMinimumShiftOutAmount(
      _minShiftOutAmount: number | string
    ): TransactionObject<void>;

    updateFeeRecipient(_nextFeeRecipient: string): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    token(): TransactionObject<string>;
  };
  events: {
    LogShiftIn: ContractEvent<{
      _to: string;
      _amount: BN;
      _shiftID: BN;
      0: string;
      1: BN;
      2: BN;
    }>;
    LogShiftOut: ContractEvent<{
      _to: string;
      _amount: BN;
      _shiftID: BN;
      _indexedTo: string;
      0: string;
      1: BN;
      2: BN;
      3: string;
    }>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
