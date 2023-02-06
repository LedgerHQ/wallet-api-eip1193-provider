import { z } from "zod";
export declare const schemaRawEthereumTransaction: z.ZodObject<z.extendShape<{
    amount: z.ZodString;
    recipient: z.ZodString;
}, {
    family: z.ZodLiteral<"ethereum">;
    nonce: z.ZodOptional<z.ZodNumber>;
    data: z.ZodOptional<z.ZodString>;
    gasPrice: z.ZodOptional<z.ZodString>;
    gasLimit: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    data?: string | undefined;
    nonce?: number | undefined;
    gasPrice?: string | undefined;
    gasLimit?: string | undefined;
    amount: string;
    recipient: string;
    family: "ethereum";
}, {
    data?: string | undefined;
    nonce?: number | undefined;
    gasPrice?: string | undefined;
    gasLimit?: string | undefined;
    amount: string;
    recipient: string;
    family: "ethereum";
}>;
//# sourceMappingURL=validation.d.ts.map