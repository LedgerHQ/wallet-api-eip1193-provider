import BigNumber from "bignumber.js";
export const serializeTronTransaction = ({ amount, recipient, family, mode, resource, duration, }) => {
    return {
        amount: amount.toString(),
        recipient,
        family,
        mode,
        resource,
        duration,
    };
};
export const deserializeTronTransaction = ({ amount, recipient, family, mode, resource, duration, }) => {
    return {
        amount: new BigNumber(amount),
        recipient,
        family,
        mode,
        resource,
        duration,
    };
};
