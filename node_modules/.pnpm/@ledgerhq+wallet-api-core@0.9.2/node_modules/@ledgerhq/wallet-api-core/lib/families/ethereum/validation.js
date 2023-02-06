"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaRawEthereumTransaction = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.schemaRawEthereumTransaction = common_1.schemaTransactionCommon.extend({
    family: zod_1.z.literal(common_1.schemaFamilies.enum.ethereum),
    nonce: zod_1.z.number().optional(),
    data: zod_1.z.string().optional(),
    gasPrice: zod_1.z.string().optional(),
    gasLimit: zod_1.z.string().optional(),
});
