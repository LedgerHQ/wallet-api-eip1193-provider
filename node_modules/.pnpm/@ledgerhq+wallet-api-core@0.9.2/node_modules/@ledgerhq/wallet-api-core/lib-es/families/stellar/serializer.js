import BigNumber from "bignumber.js";
export const serializeStellarTransaction = ({ amount, recipient, family, fees, memoType, memoValue, }) => {
    return {
        amount: amount.toString(),
        recipient,
        family,
        fees: fees ? fees.toString() : undefined,
        memoType,
        memoValue,
    };
};
export const deserializeStellarTransaction = ({ amount, recipient, family, fees, memoType, memoValue, }) => {
    return {
        amount: new BigNumber(amount),
        recipient,
        family,
        fees: fees ? new BigNumber(fees) : undefined,
        memoType,
        memoValue,
    };
};
