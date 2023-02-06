"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaDeviceClose = void 0;
const zod_1 = require("zod");
const schemaDeviceCloseParams = zod_1.z.object({
    transportId: zod_1.z.string(),
});
const schemaDeviceCloseResults = zod_1.z.object({
    transportId: zod_1.z.string(),
});
exports.schemaDeviceClose = {
    params: schemaDeviceCloseParams,
    result: schemaDeviceCloseResults,
};
