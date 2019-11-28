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

export class ShifterRegistry extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: contractOptions
  );
  clone(): ShifterRegistry;
  address: string;
  methods: {
    claimOwnership(): TransactionObject<void>;

    renounceOwnership(): TransactionObject<void>;

    owner(): TransactionObject<string>;

    isOwner(): TransactionObject<boolean>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    setShifter(
      _tokenAddress: string,
      _shifterAddress: string
    ): TransactionObject<void>;

    updateShifter(
      _tokenAddress: string,
      _newShifterAddress: string
    ): TransactionObject<void>;

    removeShifter(_symbol: string): TransactionObject<void>;

    getShifters(
      _start: string,
      _count: number | string
    ): TransactionObject<(string)[]>;

    getShiftedTokens(
      _start: string,
      _count: number | string
    ): TransactionObject<(string)[]>;

    getShifterByToken(_tokenAddress: string): TransactionObject<string>;

    getShifterBySymbol(_tokenSymbol: string): TransactionObject<string>;

    getTokenBySymbol(_tokenSymbol: string): TransactionObject<string>;
  };
  events: {
    LogShifterRegistered: ContractEvent<{
      _symbol: string;
      _indexedSymbol: string;
      _tokenAddress: string;
      _shifterAddress: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;
    LogShifterDeregistered: ContractEvent<{
      _symbol: string;
      _indexedSymbol: string;
      _tokenAddress: string;
      _shifterAddress: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;
    LogShifterUpdated: ContractEvent<{
      _tokenAddress: string;
      _currentShifterAddress: string;
      _newShifterAddress: string;
      0: string;
      1: string;
      2: string;
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
