import { z } from "zod";
export declare const schemaRawBitcoinTransaction: z.ZodObject<z.extendShape<{
    amount: z.ZodString;
    recipient: z.ZodString;
}, {
    family: z.ZodLiteral<"bitcoin">;
    feePerByte: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    feePerByte?: string | undefined;
    amount: string;
    recipient: string;
    family: "bitcoin";
}, {
    feePerByte?: string | undefined;
    amount: string;
    recipient: string;
    family: "bitcoin";
}>;
//# sourceMappingURL=validation.d.ts.map