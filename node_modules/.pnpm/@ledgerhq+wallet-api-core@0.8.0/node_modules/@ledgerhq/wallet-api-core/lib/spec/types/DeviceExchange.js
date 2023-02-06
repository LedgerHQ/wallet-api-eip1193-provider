"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaDeviceExchange = void 0;
const zod_1 = require("zod");
const schemaDeviceExchangeParams = zod_1.z.object({
    apduHex: zod_1.z.string(),
    transportId: zod_1.z.string(),
});
const schemaDeviceExchangeResults = zod_1.z.object({
    responseHex: zod_1.z.string(),
});
exports.schemaDeviceExchange = {
    params: schemaDeviceExchangeParams,
    result: schemaDeviceExchangeResults,
};
