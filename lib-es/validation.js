import { z } from "zod";
export const switchEthereumChainParams = z.tuple([
    z.object({
        chainId: z.string(), // A 0x-prefixed hexadecimal string
    }),
]);
export const transactionSchema = z.object({
    from: z.string(),
    to: z.string(),
}).passthrough();
/*
  to?: string;
  nonce?: number;
  gasLimit?: BigNumberish;
  gasPrice?: BigNumberish;
  data?: BytesLike;
  value?: BigNumberish;
  chainId?: number;
  type?: number | null;
  accessList?: AccessListish;
  maxPriorityFeePerGas?: BigNumberish;
  maxFeePerGas?: BigNumberish;

*/
export const sendTransactionParams = z.tuple([transactionSchema]);
export const personalSignParams = z.tuple([z.string(), z.string(), z.string()]);
export const signTypedDataParams = z.tuple([
    z.string(),
    z.string(),
    z.string(),
]);
