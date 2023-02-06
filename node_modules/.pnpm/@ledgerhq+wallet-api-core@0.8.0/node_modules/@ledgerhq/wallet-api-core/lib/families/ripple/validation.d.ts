import { z } from "zod";
export declare const schemaRawRippleTransaction: z.ZodObject<z.extendShape<{
    amount: z.ZodString;
    recipient: z.ZodString;
}, {
    family: z.ZodLiteral<"ripple">;
    fee: z.ZodOptional<z.ZodString>;
    tag: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    fee?: string | undefined;
    amount: string;
    recipient: string;
    family: "ripple";
    tag: number;
}, {
    fee?: string | undefined;
    amount: string;
    recipient: string;
    family: "ripple";
    tag: number;
}>;
//# sourceMappingURL=validation.d.ts.map