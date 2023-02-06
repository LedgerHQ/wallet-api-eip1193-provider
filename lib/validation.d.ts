import { z } from "zod";
export declare const switchEthereumChainParams: z.ZodTuple<[z.ZodObject<{
    chainId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    chainId: string;
}, {
    chainId: string;
}>], null>;
export declare const transactionSchema: z.ZodObject<{
    from: z.ZodString;
    to: z.ZodString;
}, "passthrough", z.ZodTypeAny, {
    from: string;
    to: string;
}, {
    from: string;
    to: string;
}>;
export declare const sendTransactionParams: z.ZodTuple<[z.ZodObject<{
    from: z.ZodString;
    to: z.ZodString;
}, "passthrough", z.ZodTypeAny, {
    from: string;
    to: string;
}, {
    from: string;
    to: string;
}>], null>;
export declare const personalSignParams: z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString], null>;
export declare const signTypedDataParams: z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString], null>;
//# sourceMappingURL=validation.d.ts.map