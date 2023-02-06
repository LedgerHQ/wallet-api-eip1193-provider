"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaServerErrorData = exports.schemaUnknownError = exports.schemaPermissionDenied = exports.schemaCurrencyNotFound = exports.schemaAccountNotFound = exports.schemaNotImplementedByWallet = exports.schemaServerErrorCode = void 0;
const zod_1 = require("zod");
/*
    This file define all the "app level" errors, feel free to define new errors
    as we add new features to the Wallet API
*/
exports.schemaServerErrorCode = zod_1.z.enum([
    "NOT_IMPLEMENTED_BY_WALLET",
    "ACCOUNT_NOT_FOUND",
    "CURRENCY_NOT_FOUND",
    "PERMISSION_DENIED",
    "UNKNOWN_ERROR",
]);
/*
    NOT_IMPLEMENTED_BY_WALLET
*/
exports.schemaNotImplementedByWallet = zod_1.z.object({
    code: zod_1.z.literal(exports.schemaServerErrorCode.enum.NOT_IMPLEMENTED_BY_WALLET),
    message: zod_1.z.string(),
    data: zod_1.z.object({
        methodId: zod_1.z.string(),
    }),
});
/*
    ACCOUNT_NOT_FOUND
*/
exports.schemaAccountNotFound = zod_1.z.object({
    code: zod_1.z.literal(exports.schemaServerErrorCode.enum.ACCOUNT_NOT_FOUND),
    message: zod_1.z.string(),
    data: zod_1.z.object({
        accountId: zod_1.z.string(),
    }),
});
/*
    CURRENCY_NOT_FOUND
*/
exports.schemaCurrencyNotFound = zod_1.z.object({
    code: zod_1.z.literal(exports.schemaServerErrorCode.enum.CURRENCY_NOT_FOUND),
    message: zod_1.z.string(),
    data: zod_1.z.object({
        currencyId: zod_1.z.string(),
    }),
});
/*
    PERMISSION_DENIED
*/
exports.schemaPermissionDenied = zod_1.z.object({
    code: zod_1.z.literal(exports.schemaServerErrorCode.enum.PERMISSION_DENIED),
    message: zod_1.z.string(),
    data: zod_1.z.object({
        methodId: zod_1.z.string(),
    }),
});
/*
    UNKNOWN_ERROR
*/
exports.schemaUnknownError = zod_1.z.object({
    code: zod_1.z.literal(exports.schemaServerErrorCode.enum.UNKNOWN_ERROR),
    message: zod_1.z.string(),
    data: zod_1.z.object({
        name: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
        stack: zod_1.z.string().optional(),
        cause: zod_1.z.unknown().optional(),
        code: zod_1.z.string().optional(),
    }),
});
exports.schemaServerErrorData = zod_1.z.discriminatedUnion("code", [
    exports.schemaNotImplementedByWallet,
    exports.schemaAccountNotFound,
    exports.schemaCurrencyNotFound,
    exports.schemaPermissionDenied,
    exports.schemaUnknownError,
]);
