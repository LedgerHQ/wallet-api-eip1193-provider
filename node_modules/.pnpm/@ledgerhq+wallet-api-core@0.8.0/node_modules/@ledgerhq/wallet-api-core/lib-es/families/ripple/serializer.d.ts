import type { RawRippleTransaction, RippleTransaction } from "./types";
export declare const serializeRippleTransaction: ({ family, fee, tag, amount, recipient, }: RippleTransaction) => RawRippleTransaction;
export declare const deserializeRippleTransaction: ({ family, fee, tag, amount, recipient, }: RawRippleTransaction) => RippleTransaction;
//# sourceMappingURL=serializer.d.ts.map