import { z } from "zod";
const schemaAccountReceiveParams = z.object({
    accountId: z.string(),
});
const schemaAccountReceiveResults = z.object({
    address: z.string(),
});
export const schemaAccountReceive = {
    params: schemaAccountReceiveParams,
    result: schemaAccountReceiveResults,
};
