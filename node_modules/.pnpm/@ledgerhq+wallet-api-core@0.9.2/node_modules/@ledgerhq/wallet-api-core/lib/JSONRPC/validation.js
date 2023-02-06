"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRPCCall = exports.schemaRPCResponse = exports.schemaRPCResponseError = exports.schemaRPCResponseSuccess = exports.schemaRPCResponseErrorData = exports.schemaRPCRequest = void 0;
const zod_1 = require("zod");
const schemaRPCId = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.null()]);
exports.schemaRPCRequest = zod_1.z
    .object({
    jsonrpc: zod_1.z.literal("2.0"),
    method: zod_1.z.string(),
    params: zod_1.z.any(),
    id: schemaRPCId.optional(),
})
    .strict();
exports.schemaRPCResponseErrorData = zod_1.z
    .object({
    code: zod_1.z.number(),
    message: zod_1.z.string(),
    data: zod_1.z.any().optional(),
})
    .strict();
exports.schemaRPCResponseSuccess = zod_1.z
    .object({
    jsonrpc: zod_1.z.literal("2.0"),
    id: schemaRPCId,
    result: zod_1.z.object({}).passthrough(),
})
    .strict();
exports.schemaRPCResponseError = zod_1.z
    .object({
    jsonrpc: zod_1.z.literal("2.0"),
    id: schemaRPCId,
    error: exports.schemaRPCResponseErrorData,
})
    .strict();
exports.schemaRPCResponse = zod_1.z.union([
    exports.schemaRPCResponseError,
    exports.schemaRPCResponseSuccess,
]);
exports.schemaRPCCall = zod_1.z.union([exports.schemaRPCRequest, exports.schemaRPCResponse]);
