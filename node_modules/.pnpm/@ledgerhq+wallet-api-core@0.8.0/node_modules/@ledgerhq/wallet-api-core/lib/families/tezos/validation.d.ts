import { z } from "zod";
export declare const schemaTezosOperationMode: z.ZodEnum<["send", "delegate", "undelegate"]>;
export declare const schemaRawTezosTransaction: z.ZodObject<z.extendShape<{
    amount: z.ZodString;
    recipient: z.ZodString;
}, {
    family: z.ZodLiteral<"tezos">;
    mode: z.ZodEnum<["send", "delegate", "undelegate"]>;
    fees: z.ZodOptional<z.ZodString>;
    gasLimit: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    fees?: string | undefined;
    gasLimit?: string | undefined;
    amount: string;
    recipient: string;
    family: "tezos";
    mode: "send" | "delegate" | "undelegate";
}, {
    fees?: string | undefined;
    gasLimit?: string | undefined;
    amount: string;
    recipient: string;
    family: "tezos";
    mode: "send" | "delegate" | "undelegate";
}>;
//# sourceMappingURL=validation.d.ts.map