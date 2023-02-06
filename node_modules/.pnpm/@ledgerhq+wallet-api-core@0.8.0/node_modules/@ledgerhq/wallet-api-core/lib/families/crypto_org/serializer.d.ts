import type { CryptoOrgTransaction, RawCryptoOrgTransaction } from "./types";
export declare const serializeCryptoOrgTransaction: ({ family, mode, fees, amount, recipient, }: CryptoOrgTransaction) => RawCryptoOrgTransaction;
export declare const deserializeCryptoOrgTransaction: ({ family, mode, fees, amount, recipient, }: RawCryptoOrgTransaction) => CryptoOrgTransaction;
//# sourceMappingURL=serializer.d.ts.map