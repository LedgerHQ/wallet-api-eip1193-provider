import { z } from "zod";
export declare const schemaRawStellarTransaction: z.ZodObject<z.extendShape<{
    amount: z.ZodString;
    recipient: z.ZodString;
}, {
    family: z.ZodLiteral<"stellar">;
    fees: z.ZodOptional<z.ZodString>;
    memoType: z.ZodOptional<z.ZodString>;
    memoValue: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    fees?: string | undefined;
    memoType?: string | undefined;
    memoValue?: string | undefined;
    amount: string;
    recipient: string;
    family: "stellar";
}, {
    fees?: string | undefined;
    memoType?: string | undefined;
    memoValue?: string | undefined;
    amount: string;
    recipient: string;
    family: "stellar";
}>;
//# sourceMappingURL=validation.d.ts.map