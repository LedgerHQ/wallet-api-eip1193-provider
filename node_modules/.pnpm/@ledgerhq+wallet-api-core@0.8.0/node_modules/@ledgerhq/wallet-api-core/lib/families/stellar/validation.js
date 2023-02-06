"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRawStellarTransaction = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.schemaRawStellarTransaction = common_1.schemaTransactionCommon.extend({
    family: zod_1.z.literal(common_1.schemaFamilies.enum.stellar),
    fees: zod_1.z.string().optional(),
    memoType: zod_1.z.string().optional(),
    memoValue: zod_1.z.string().optional(),
});
