import BigNumber from "bignumber.js";
export function serializeBitcoinTransaction({ family, amount, recipient, feePerByte, }) {
    return {
        family,
        amount: amount.toString(),
        recipient,
        feePerByte: feePerByte ? feePerByte.toString() : undefined,
    };
}
export function deserializeBitcoinTransaction({ family, amount, recipient, feePerByte, }) {
    return {
        family,
        amount: new BigNumber(amount),
        recipient,
        feePerByte: feePerByte ? new BigNumber(feePerByte) : undefined,
    };
}
