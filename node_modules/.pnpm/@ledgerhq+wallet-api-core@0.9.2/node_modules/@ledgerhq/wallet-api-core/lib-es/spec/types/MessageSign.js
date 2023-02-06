import { z } from "zod";
const schemaMessageSignParams = z.object({
    accountId: z.string(),
    hexMessage: z.string(),
});
const schemaMessageSignResults = z.object({
    hexSignedMessage: z.string(),
});
export const schemaMessageSign = {
    params: schemaMessageSignParams,
    result: schemaMessageSignResults,
};
