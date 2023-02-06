"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRawTezosTransaction = exports.schemaTezosOperationMode = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.schemaTezosOperationMode = zod_1.z.enum([
    "send",
    "delegate",
    "undelegate",
]);
exports.schemaRawTezosTransaction = common_1.schemaTransactionCommon.extend({
    family: zod_1.z.literal(common_1.schemaFamilies.enum.tezos),
    mode: exports.schemaTezosOperationMode,
    fees: zod_1.z.string().optional(),
    gasLimit: zod_1.z.string().optional(),
});
