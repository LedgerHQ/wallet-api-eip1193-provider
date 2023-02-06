"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaMessageSign = void 0;
const zod_1 = require("zod");
const schemaMessageSignParams = zod_1.z.object({
    accountId: zod_1.z.string(),
    hexMessage: zod_1.z.string(),
});
const schemaMessageSignResults = zod_1.z.object({
    hexSignedMessage: zod_1.z.string(),
});
exports.schemaMessageSign = {
    params: schemaMessageSignParams,
    result: schemaMessageSignResults,
};
