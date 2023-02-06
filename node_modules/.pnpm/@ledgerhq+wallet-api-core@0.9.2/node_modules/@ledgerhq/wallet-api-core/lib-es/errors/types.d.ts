import { z } from "zod";
export declare const schemaServerErrorCode: z.ZodEnum<["NOT_IMPLEMENTED_BY_WALLET", "ACCOUNT_NOT_FOUND", "CURRENCY_NOT_FOUND", "PERMISSION_DENIED", "UNKNOWN_ERROR"]>;
export declare type ServerErrorCode = z.infer<typeof schemaServerErrorCode>;
export declare const schemaNotImplementedByWallet: z.ZodObject<{
    code: z.ZodLiteral<"NOT_IMPLEMENTED_BY_WALLET">;
    message: z.ZodString;
    data: z.ZodObject<{
        methodId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        methodId: string;
    }, {
        methodId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "NOT_IMPLEMENTED_BY_WALLET";
    message: string;
    data: {
        methodId: string;
    };
}, {
    code: "NOT_IMPLEMENTED_BY_WALLET";
    message: string;
    data: {
        methodId: string;
    };
}>;
export declare type NotImplementedByWallet = z.infer<typeof schemaNotImplementedByWallet>;
export declare const schemaAccountNotFound: z.ZodObject<{
    code: z.ZodLiteral<"ACCOUNT_NOT_FOUND">;
    message: z.ZodString;
    data: z.ZodObject<{
        accountId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
    }, {
        accountId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "ACCOUNT_NOT_FOUND";
    message: string;
    data: {
        accountId: string;
    };
}, {
    code: "ACCOUNT_NOT_FOUND";
    message: string;
    data: {
        accountId: string;
    };
}>;
export declare type AccountNotFound = z.infer<typeof schemaAccountNotFound>;
export declare const schemaCurrencyNotFound: z.ZodObject<{
    code: z.ZodLiteral<"CURRENCY_NOT_FOUND">;
    message: z.ZodString;
    data: z.ZodObject<{
        currencyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        currencyId: string;
    }, {
        currencyId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "CURRENCY_NOT_FOUND";
    message: string;
    data: {
        currencyId: string;
    };
}, {
    code: "CURRENCY_NOT_FOUND";
    message: string;
    data: {
        currencyId: string;
    };
}>;
export declare type CurrencyNotFound = z.infer<typeof schemaCurrencyNotFound>;
export declare const schemaPermissionDenied: z.ZodObject<{
    code: z.ZodLiteral<"PERMISSION_DENIED">;
    message: z.ZodString;
    data: z.ZodObject<{
        methodId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        methodId: string;
    }, {
        methodId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "PERMISSION_DENIED";
    message: string;
    data: {
        methodId: string;
    };
}, {
    code: "PERMISSION_DENIED";
    message: string;
    data: {
        methodId: string;
    };
}>;
export declare type PermissionDenied = z.infer<typeof schemaPermissionDenied>;
export declare const schemaUnknownError: z.ZodObject<{
    code: z.ZodLiteral<"UNKNOWN_ERROR">;
    message: z.ZodString;
    data: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
        stack: z.ZodOptional<z.ZodString>;
        cause: z.ZodOptional<z.ZodUnknown>;
        code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    }, {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "UNKNOWN_ERROR";
    message: string;
    data: {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    };
}, {
    code: "UNKNOWN_ERROR";
    message: string;
    data: {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    };
}>;
export declare type UnknownError = z.infer<typeof schemaUnknownError>;
export declare const schemaServerErrorData: z.ZodDiscriminatedUnion<"code", z.Primitive, z.ZodObject<{
    code: z.ZodLiteral<"NOT_IMPLEMENTED_BY_WALLET">;
    message: z.ZodString;
    data: z.ZodObject<{
        methodId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        methodId: string;
    }, {
        methodId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "NOT_IMPLEMENTED_BY_WALLET";
    message: string;
    data: {
        methodId: string;
    };
}, {
    code: "NOT_IMPLEMENTED_BY_WALLET";
    message: string;
    data: {
        methodId: string;
    };
}> | z.ZodObject<{
    code: z.ZodLiteral<"ACCOUNT_NOT_FOUND">;
    message: z.ZodString;
    data: z.ZodObject<{
        accountId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        accountId: string;
    }, {
        accountId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "ACCOUNT_NOT_FOUND";
    message: string;
    data: {
        accountId: string;
    };
}, {
    code: "ACCOUNT_NOT_FOUND";
    message: string;
    data: {
        accountId: string;
    };
}> | z.ZodObject<{
    code: z.ZodLiteral<"CURRENCY_NOT_FOUND">;
    message: z.ZodString;
    data: z.ZodObject<{
        currencyId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        currencyId: string;
    }, {
        currencyId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "CURRENCY_NOT_FOUND";
    message: string;
    data: {
        currencyId: string;
    };
}, {
    code: "CURRENCY_NOT_FOUND";
    message: string;
    data: {
        currencyId: string;
    };
}> | z.ZodObject<{
    code: z.ZodLiteral<"PERMISSION_DENIED">;
    message: z.ZodString;
    data: z.ZodObject<{
        methodId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        methodId: string;
    }, {
        methodId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "PERMISSION_DENIED";
    message: string;
    data: {
        methodId: string;
    };
}, {
    code: "PERMISSION_DENIED";
    message: string;
    data: {
        methodId: string;
    };
}> | z.ZodObject<{
    code: z.ZodLiteral<"UNKNOWN_ERROR">;
    message: z.ZodString;
    data: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
        stack: z.ZodOptional<z.ZodString>;
        cause: z.ZodOptional<z.ZodUnknown>;
        code: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    }, {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    code: "UNKNOWN_ERROR";
    message: string;
    data: {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    };
}, {
    code: "UNKNOWN_ERROR";
    message: string;
    data: {
        name?: string | undefined;
        code?: string | undefined;
        message?: string | undefined;
        stack?: string | undefined;
        cause?: unknown;
    };
}>>;
export declare type ServerErrorData = z.infer<typeof schemaServerErrorData>;
//# sourceMappingURL=types.d.ts.map