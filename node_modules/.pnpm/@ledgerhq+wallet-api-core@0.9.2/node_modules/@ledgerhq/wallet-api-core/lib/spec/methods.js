"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRPCMethod = void 0;
const zod_1 = require("zod");
exports.schemaRPCMethod = zod_1.z.enum([
    "account.list",
    "account.receive",
    "account.request",
    "currency.list",
    "device.close",
    "device.exchange",
    "device.transport",
    "message.sign",
    "transaction.sign",
    "transaction.signAndBroadcast",
    "wallet.capabilities",
]);
