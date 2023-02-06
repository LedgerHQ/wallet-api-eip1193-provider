"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRawCryptoOrgTransaction = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.schemaRawCryptoOrgTransaction = common_1.schemaTransactionCommon.extend({
    family: zod_1.z.literal(common_1.schemaFamilies.enum.crypto_org),
    mode: zod_1.z.string(),
    fees: zod_1.z.string().optional(),
});
