"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeBitcoinTransaction = exports.serializeBitcoinTransaction = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
function serializeBitcoinTransaction({ family, amount, recipient, feePerByte, }) {
    return {
        family,
        amount: amount.toString(),
        recipient,
        feePerByte: feePerByte ? feePerByte.toString() : undefined,
    };
}
exports.serializeBitcoinTransaction = serializeBitcoinTransaction;
function deserializeBitcoinTransaction({ family, amount, recipient, feePerByte, }) {
    return {
        family,
        amount: new bignumber_js_1.default(amount),
        recipient,
        feePerByte: feePerByte ? new bignumber_js_1.default(feePerByte) : undefined,
    };
}
exports.deserializeBitcoinTransaction = deserializeBitcoinTransaction;
