import { z } from "zod";
declare const schemaWalletCapabilitiesParams: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
declare const schemaWalletCapabilitiesResults: z.ZodObject<{
    methodIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    methodIds: string[];
}, {
    methodIds: string[];
}>;
export declare const schemaWalletCapabilities: {
    params: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    result: z.ZodObject<{
        methodIds: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        methodIds: string[];
    }, {
        methodIds: string[];
    }>;
};
export declare type WalletCapabilities = {
    params: z.infer<typeof schemaWalletCapabilitiesParams>;
    result: z.infer<typeof schemaWalletCapabilitiesResults>;
};
export declare type WalletCapabilitiesHandler = (params: WalletCapabilities["params"]) => WalletCapabilities["result"];
export {};
//# sourceMappingURL=WalletCapabilities.d.ts.map