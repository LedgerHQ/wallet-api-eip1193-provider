import BigNumber from "bignumber.js";
export const serializeAlgorandTransaction = ({ family, mode, fees, assetId, memo, amount, recipient, }) => {
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
export const deserializeAlgorandTransaction = ({ family, mode, fees, assetId, memo, amount, recipient, }) => {
    return {
        family,
        amount: new BigNumber(amount),
        recipient,
        fees: fees ? new BigNumber(fees) : undefined,
        memo,
        mode,
        assetId,
    };
};
