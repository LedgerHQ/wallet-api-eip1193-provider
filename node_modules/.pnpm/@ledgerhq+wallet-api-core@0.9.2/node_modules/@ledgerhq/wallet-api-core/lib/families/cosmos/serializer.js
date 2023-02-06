"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeCosmosTransaction = exports.serializeCosmosTransaction = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const serializeCosmosTransaction = ({ amount, recipient, family, mode, fees, gas, memo, }) => {
    return {
        amount: amount.toString(),
        recipient,
        family,
        mode,
        fees: fees ? fees.toString() : undefined,
        gas: gas ? gas.toString() : undefined,
        memo,
    };
};
exports.serializeCosmosTransaction = serializeCosmosTransaction;
const deserializeCosmosTransaction = ({ amount, recipient, family, mode, fees, gas, memo, }) => {
    return {
        amount: new bignumber_js_1.default(amount),
        recipient,
        family,
        mode,
        fees: fees ? new bignumber_js_1.default(fees) : undefined,
        gas: gas ? new bignumber_js_1.default(gas) : undefined,
        memo,
    };
};
exports.deserializeCosmosTransaction = deserializeCosmosTransaction;
