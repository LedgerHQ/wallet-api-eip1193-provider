"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTypedDataParams = exports.personalSignParams = exports.sendTransactionParams = exports.switchEthereumChainParams = void 0;
const zod_1 = require("zod");
exports.switchEthereumChainParams = zod_1.z.tuple([
    zod_1.z.object({
        chainId: zod_1.z.string(), // A 0x-prefixed hexadecimal string
    }),
]);
exports.sendTransactionParams = zod_1.z.tuple([
    zod_1.z.object({
        from: zod_1.z.string(),
        to: zod_1.z.string(),
        gas: zod_1.z.string(),
        gasPrice: zod_1.z.string(),
        value: zod_1.z.string(),
        data: zod_1.z.string(),
    }),
]);
exports.personalSignParams = zod_1.z.tuple([
    zod_1.z.string(),
    zod_1.z.string(),
    zod_1.z.string()
]);
exports.signTypedDataParams = zod_1.z.tuple([
    zod_1.z.string(),
    zod_1.z.string(),
    zod_1.z.string()
]);
