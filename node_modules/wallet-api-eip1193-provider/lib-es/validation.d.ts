import { z } from "zod";
export declare const switchEthereumChainParams: z.ZodTuple<[z.ZodObject<{
    chainId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    chainId: string;
}, {
    chainId: string;
}>], null>;
export declare const sendTransactionParams: z.ZodTuple<[z.ZodObject<{
    from: z.ZodString;
    to: z.ZodString;
    gas: z.ZodString;
    gasPrice: z.ZodString;
    value: z.ZodString;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    data: string;
    from: string;
    to: string;
    gas: string;
    gasPrice: string;
}, {
    value: string;
    data: string;
    from: string;
    to: string;
    gas: string;
    gasPrice: string;
}>], null>;
export declare const personalSignParams: z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString], null>;
export declare const signTypedDataParams: z.ZodTuple<[z.ZodString, z.ZodString, z.ZodString], null>;
//# sourceMappingURL=validation.d.ts.map