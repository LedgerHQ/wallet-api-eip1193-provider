import BigNumber from "bignumber.js";
export const serializeCosmosTransaction = ({ amount, recipient, family, mode, fees, gas, memo, }) => {
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
export const deserializeCosmosTransaction = ({ amount, recipient, family, mode, fees, gas, memo, }) => {
    return {
        amount: new BigNumber(amount),
        recipient,
        family,
        mode,
        fees: fees ? new BigNumber(fees) : undefined,
        gas: gas ? new BigNumber(gas) : undefined,
        memo,
    };
};
