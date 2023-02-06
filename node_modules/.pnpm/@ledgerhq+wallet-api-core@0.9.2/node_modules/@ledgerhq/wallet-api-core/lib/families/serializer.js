"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeTransaction = exports.serializeTransaction = void 0;
const serializer_1 = require("./algorand/serializer");
const serializer_2 = require("./bitcoin/serializer");
const serializer_3 = require("./cosmos/serializer");
const serializer_4 = require("./crypto_org/serializer");
const serializer_5 = require("./ethereum/serializer");
const serializer_6 = require("./polkadot/serializer");
const serializer_7 = require("./ripple/serializer");
const serializer_8 = require("./stellar/serializer");
const serializer_9 = require("./tezos/serializer");
const serializer_10 = require("./tron/serializer");
/**
 * Serialize an [[Transaction]] object in order to send it over JSON-RPC
 * protocol to the Ledger Live platform
 * @param transaction - The transaction object to serialize
 *
 * @returns The raw representation of the provided transaction object
 */
function serializeTransaction(transaction) {
    switch (transaction.family) {
        case "ethereum":
            return (0, serializer_5.serializeEthereumTransaction)(transaction);
        case "bitcoin":
            return (0, serializer_2.serializeBitcoinTransaction)(transaction);
        case "algorand":
            return (0, serializer_1.serializeAlgorandTransaction)(transaction);
        case "crypto_org":
            return (0, serializer_4.serializeCryptoOrgTransaction)(transaction);
        case "ripple":
            return (0, serializer_7.serializeRippleTransaction)(transaction);
        case "cosmos":
            return (0, serializer_3.serializeCosmosTransaction)(transaction);
        case "tezos":
            return (0, serializer_9.serializeTezosTransaction)(transaction);
        case "polkadot":
            return (0, serializer_6.serializePolkadotTransaction)(transaction);
        case "stellar":
            return (0, serializer_8.serializeStellarTransaction)(transaction);
        case "tron":
            return (0, serializer_10.serializeTronTransaction)(transaction);
        default: {
            const exhaustiveCheck = transaction; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
            return exhaustiveCheck;
            // throw new Error("Can't serialize transaction: family not supported");
        }
    }
}
exports.serializeTransaction = serializeTransaction;
/**
 * Deserialize a [[RawTransaction]] object after it has been received over
 * JSON-RPC protocol from the Ledger Live platform
 * @param rawTransaction - The raw transaction representation to deserialize
 *
 * @returns The object transaction of the provided raw transaction representation
 */
function deserializeTransaction(rawTransaction) {
    switch (rawTransaction.family) {
        case "ethereum":
            return (0, serializer_5.deserializeEthereumTransaction)(rawTransaction);
        case "bitcoin":
            return (0, serializer_2.deserializeBitcoinTransaction)(rawTransaction);
        case "algorand":
            return (0, serializer_1.deserializeAlgorandTransaction)(rawTransaction);
        case "crypto_org":
            return (0, serializer_4.deserializeCryptoOrgTransaction)(rawTransaction);
        case "ripple":
            return (0, serializer_7.deserializeRippleTransaction)(rawTransaction);
        case "cosmos":
            return (0, serializer_3.deserializeCosmosTransaction)(rawTransaction);
        case "tezos":
            return (0, serializer_9.deserializeTezosTransaction)(rawTransaction);
        case "polkadot":
            return (0, serializer_6.deserializePolkadotTransaction)(rawTransaction);
        case "stellar":
            return (0, serializer_8.deserializeStellarTransaction)(rawTransaction);
        case "tron":
            return (0, serializer_10.deserializeTronTransaction)(rawTransaction);
        default: {
            const exhaustiveCheck = rawTransaction; // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
            return exhaustiveCheck;
            // throw new Error("Can't deserialize transaction: family not supported");
        }
    }
}
exports.deserializeTransaction = deserializeTransaction;
