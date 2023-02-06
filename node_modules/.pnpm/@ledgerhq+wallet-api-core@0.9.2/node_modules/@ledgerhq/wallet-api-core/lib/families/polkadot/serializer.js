"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializePolkadotTransaction = exports.serializePolkadotTransaction = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const serializePolkadotTransaction = ({ amount, recipient, family, mode, fee, era, }) => {
    return {
        amount: amount.toString(),
        recipient,
        family,
        mode,
        fee: fee ? fee.toString() : undefined,
        era,
    };
};
exports.serializePolkadotTransaction = serializePolkadotTransaction;
const deserializePolkadotTransaction = ({ amount, recipient, family, mode, fee, era, }) => {
    return {
        amount: new bignumber_js_1.default(amount),
        recipient,
        family,
        mode,
        fee: fee ? new bignumber_js_1.default(fee) : undefined,
        era,
    };
};
exports.deserializePolkadotTransaction = deserializePolkadotTransaction;
