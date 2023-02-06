import { z } from "zod";
declare const schemaMessageSignParams: z.ZodObject<{
    accountId: z.ZodString;
    hexMessage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountId: string;
    hexMessage: string;
}, {
    accountId: string;
    hexMessage: string;
}>;
declare const schemaMessageSignResults: z.ZodObject<{
    hexSignedMessage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    hexSignedMessage: string;
}, {
    hexSignedMessage: string;
}>;
export declare const schemaMessageSign: {
    params: z.ZodObject<{
        accountId: z.ZodString;
        hexMessage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
        hexMessage: string;
    }, {
        accountId: string;
        hexMessage: string;
    }>;
    result: z.ZodObject<{
        hexSignedMessage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        hexSignedMessage: string;
    }, {
        hexSignedMessage: string;
    }>;
};
export declare type MessageSign = {
    params: z.infer<typeof schemaMessageSignParams>;
    result: z.infer<typeof schemaMessageSignResults>;
};
export declare type MessageSignHandler = (params: MessageSign["params"]) => MessageSign["result"];
export {};
//# sourceMappingURL=MessageSign.d.ts.map