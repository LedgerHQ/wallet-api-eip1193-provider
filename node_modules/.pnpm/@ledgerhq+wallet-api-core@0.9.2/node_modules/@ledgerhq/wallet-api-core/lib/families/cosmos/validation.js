"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRawCosmosTransaction = exports.schemaCosmosOperationMode = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.schemaCosmosOperationMode = zod_1.z.enum([
    "send",
    "delegate",
    "undelegate",
    "redelegate",
    "claimReward",
    "claimRewardCompound",
]);
exports.schemaRawCosmosTransaction = common_1.schemaTransactionCommon.extend({
    family: zod_1.z.literal(common_1.schemaFamilies.enum.cosmos),
    mode: exports.schemaCosmosOperationMode,
    fees: zod_1.z.string().optional(),
    gas: zod_1.z.string().optional(),
    memo: zod_1.z.string().optional(),
});
