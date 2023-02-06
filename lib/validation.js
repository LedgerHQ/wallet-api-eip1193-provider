"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTypedDataParams = exports.personalSignParams = exports.sendTransactionParams = exports.transactionSchema = exports.switchEthereumChainParams = void 0;
const zod_1 = require("zod");
exports.switchEthereumChainParams = zod_1.z.tuple([
    zod_1.z.object({
        chainId: zod_1.z.string(), // A 0x-prefixed hexadecimal string
    }),
]);
exports.transactionSchema = zod_1.z.object({
    from: zod_1.z.string(),
    to: zod_1.z.string(),
}).passthrough();
/*
  to?: string;
  nonce?: number;
  gasLimit?: BigNumberish;
  gasPrice?: BigNumberish;
  data?: BytesLike;
  value?: BigNumberish;
  chainId?: number;
  type?: number | null;
  accessList?: AccessListish;
  maxPriorityFeePerGas?: BigNumberish;
  maxFeePerGas?: BigNumberish;

*/
exports.sendTransactionParams = zod_1.z.tuple([exports.transactionSchema]);
exports.personalSignParams = zod_1.z.tuple([zod_1.z.string(), zod_1.z.string(), zod_1.z.string()]);
exports.signTypedDataParams = zod_1.z.tuple([
    zod_1.z.string(),
    zod_1.z.string(),
    zod_1.z.string(),
]);
