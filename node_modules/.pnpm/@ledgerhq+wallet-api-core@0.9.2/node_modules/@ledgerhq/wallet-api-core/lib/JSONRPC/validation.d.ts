import { z } from "zod";
export declare const schemaRPCRequest: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    method: z.ZodString;
    params: z.ZodAny;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>>;
}, "strict", z.ZodTypeAny, {
    id?: string | number | null | undefined;
    params?: any;
    jsonrpc: "2.0";
    method: string;
}, {
    id?: string | number | null | undefined;
    params?: any;
    jsonrpc: "2.0";
    method: string;
}>;
export declare const schemaRPCResponseErrorData: z.ZodObject<{
    code: z.ZodNumber;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodAny>;
}, "strict", z.ZodTypeAny, {
    data?: any;
    code: number;
    message: string;
}, {
    data?: any;
    code: number;
    message: string;
}>;
export declare const schemaRPCResponseSuccess: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>;
    result: z.ZodObject<{}, "passthrough", z.ZodTypeAny, {}, {}>;
}, "strict", z.ZodTypeAny, {
    id: string | number | null;
    jsonrpc: "2.0";
    result: {};
}, {
    id: string | number | null;
    jsonrpc: "2.0";
    result: {};
}>;
export declare const schemaRPCResponseError: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>;
    error: z.ZodObject<{
        code: z.ZodNumber;
        message: z.ZodString;
        data: z.ZodOptional<z.ZodAny>;
    }, "strict", z.ZodTypeAny, {
        data?: any;
        code: number;
        message: string;
    }, {
        data?: any;
        code: number;
        message: string;
    }>;
}, "strict", z.ZodTypeAny, {
    id: string | number | null;
    error: {
        data?: any;
        code: number;
        message: string;
    };
    jsonrpc: "2.0";
}, {
    id: string | number | null;
    error: {
        data?: any;
        code: number;
        message: string;
    };
    jsonrpc: "2.0";
}>;
export declare const schemaRPCResponse: z.ZodUnion<[z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>;
    error: z.ZodObject<{
        code: z.ZodNumber;
        message: z.ZodString;
        data: z.ZodOptional<z.ZodAny>;
    }, "strict", z.ZodTypeAny, {
        data?: any;
        code: number;
        message: string;
    }, {
        data?: any;
        code: number;
        message: string;
    }>;
}, "strict", z.ZodTypeAny, {
    id: string | number | null;
    error: {
        data?: any;
        code: number;
        message: string;
    };
    jsonrpc: "2.0";
}, {
    id: string | number | null;
    error: {
        data?: any;
        code: number;
        message: string;
    };
    jsonrpc: "2.0";
}>, z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>;
    result: z.ZodObject<{}, "passthrough", z.ZodTypeAny, {}, {}>;
}, "strict", z.ZodTypeAny, {
    id: string | number | null;
    jsonrpc: "2.0";
    result: {};
}, {
    id: string | number | null;
    jsonrpc: "2.0";
    result: {};
}>]>;
export declare const schemaRPCCall: z.ZodUnion<[z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    method: z.ZodString;
    params: z.ZodAny;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>>;
}, "strict", z.ZodTypeAny, {
    id?: string | number | null | undefined;
    params?: any;
    jsonrpc: "2.0";
    method: string;
}, {
    id?: string | number | null | undefined;
    params?: any;
    jsonrpc: "2.0";
    method: string;
}>, z.ZodUnion<[z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>;
    error: z.ZodObject<{
        code: z.ZodNumber;
        message: z.ZodString;
        data: z.ZodOptional<z.ZodAny>;
    }, "strict", z.ZodTypeAny, {
        data?: any;
        code: number;
        message: string;
    }, {
        data?: any;
        code: number;
        message: string;
    }>;
}, "strict", z.ZodTypeAny, {
    id: string | number | null;
    error: {
        data?: any;
        code: number;
        message: string;
    };
    jsonrpc: "2.0";
}, {
    id: string | number | null;
    error: {
        data?: any;
        code: number;
        message: string;
    };
    jsonrpc: "2.0";
}>, z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodNull]>;
    result: z.ZodObject<{}, "passthrough", z.ZodTypeAny, {}, {}>;
}, "strict", z.ZodTypeAny, {
    id: string | number | null;
    jsonrpc: "2.0";
    result: {};
}, {
    id: string | number | null;
    jsonrpc: "2.0";
    result: {};
}>]>]>;
//# sourceMappingURL=validation.d.ts.map