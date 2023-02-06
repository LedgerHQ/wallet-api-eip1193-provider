"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAlgorandTransaction = exports.serializeAlgorandTransaction = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const serializeAlgorandTransaction = ({ family, mode, fees, assetId, memo, amount, recipient, }) => {
    return {
        family,
        amount: amount.toString(),
        recipient,
        fees: fees ? fees.toString() : undefined,
        memo,
        mode,
        assetId,
    };
};
exports.serializeAlgorandTransaction = serializeAlgorandTransaction;
const deserializeAlgorandTransaction = ({ family, mode, fees, assetId, memo, amount, recipient, }) => {
    return {
        family,
        amount: new bignumber_js_1.default(amount),
        recipient,
        fees: fees ? new bignumber_js_1.default(fees) : undefined,
        memo,
        mode,
        assetId,
    };
};
exports.deserializeAlgorandTransaction = deserializeAlgorandTransaction;
