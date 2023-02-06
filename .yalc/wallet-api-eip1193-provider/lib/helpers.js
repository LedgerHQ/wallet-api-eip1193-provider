"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchAddresses = exports.convertEthToLiveTX = void 0;
const bignumber_js_1 = require("bignumber.js");
const eip55_1 = __importDefault(require("eip55"));
function convertEthToLiveTX(ethTX) {
    return {
        family: "ethereum",
        amount: ethTX.value !== undefined
            ? new bignumber_js_1.BigNumber(ethTX.value.replace("0x", ""), 16)
            : new bignumber_js_1.BigNumber(0),
        recipient: eip55_1.default.encode(ethTX.to),
        gasPrice: ethTX.gasPrice !== undefined
            ? new bignumber_js_1.BigNumber(ethTX.gasPrice.replace("0x", ""), 16)
            : undefined,
        gasLimit: ethTX.gas !== undefined
            ? new bignumber_js_1.BigNumber(ethTX.gas.replace("0x", ""), 16)
            : undefined,
        data: ethTX.data
            ? Buffer.from(ethTX.data.replace("0x", ""), "hex")
            : undefined,
    };
}
exports.convertEthToLiveTX = convertEthToLiveTX;
function matchAddresses(address1, address2) {
    return address1.toLowerCase() === address2.toLowerCase();
}
exports.matchAddresses = matchAddresses;
