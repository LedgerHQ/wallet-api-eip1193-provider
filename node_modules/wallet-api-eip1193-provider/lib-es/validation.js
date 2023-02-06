import { z } from "zod";
export const switchEthereumChainParams = z.tuple([
    z.object({
        chainId: z.string(), // A 0x-prefixed hexadecimal string
    }),
]);
export const sendTransactionParams = z.tuple([
    z.object({
        from: z.string(),
        to: z.string(),
        gas: z.string(),
        gasPrice: z.string(),
        value: z.string(),
        data: z.string(),
    }),
]);
export const personalSignParams = z.tuple([
    z.string(),
    z.string(),
    z.string()
]);
export const signTypedDataParams = z.tuple([
    z.string(),
    z.string(),
    z.string()
]);
