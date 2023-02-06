"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeTezosTransaction = exports.serializeTezosTransaction = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const serializeTezosTransaction = ({ amount, recipient, family, mode, fees, gasLimit, }) => {
    return {
        amount: amount.toString(),
        recipient,
        family,
        mode,
        fees: fees ? fees.toString() : undefined,
        gasLimit: gasLimit ? gasLimit.toString() : undefined,
    };
};
exports.serializeTezosTransaction = serializeTezosTransaction;
const deserializeTezosTransaction = ({ amount, recipient, family, mode, fees, gasLimit, }) => {
    return {
        amount: new bignumber_js_1.default(amount),
        recipient,
        family,
        mode,
        fees: fees ? new bignumber_js_1.default(fees) : undefined,
        gasLimit: gasLimit ? new bignumber_js_1.default(gasLimit) : undefined,
    };
};
exports.deserializeTezosTransaction = deserializeTezosTransaction;
