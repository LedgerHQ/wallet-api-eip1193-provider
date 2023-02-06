import { z } from "zod";
import { schemaRawTransaction } from "../../families";
const schemaTransactionOptions = z.object({
    hwAppId: z.string().optional(),
});
const schemaTransactionSignParams = z.object({
    accountId: z.string(),
    rawTransaction: schemaRawTransaction,
    options: schemaTransactionOptions.optional(),
});
const schemaTransactionSignResults = z.object({
    signedTransactionHex: z.string(),
});
export const schemaTransactionSign = {
    params: schemaTransactionSignParams,
    result: schemaTransactionSignResults,
};
