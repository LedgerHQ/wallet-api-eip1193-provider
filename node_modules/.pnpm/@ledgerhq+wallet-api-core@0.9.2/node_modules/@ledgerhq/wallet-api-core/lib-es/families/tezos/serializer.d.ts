import type { RawTezosTransaction, TezosTransaction } from "./types";
export declare const serializeTezosTransaction: ({ amount, recipient, family, mode, fees, gasLimit, }: TezosTransaction) => RawTezosTransaction;
export declare const deserializeTezosTransaction: ({ amount, recipient, family, mode, fees, gasLimit, }: RawTezosTransaction) => TezosTransaction;
//# sourceMappingURL=serializer.d.ts.map