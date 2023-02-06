export function createNotImplementedByWallet(methodId) {
    return {
        code: "NOT_IMPLEMENTED_BY_WALLET",
        message: "called method is not implemented in the current wallet",
        data: {
            methodId,
        },
    };
}
export function createPermissionDenied(methodId) {
    return {
        code: "PERMISSION_DENIED",
        message: "you don't have the permission to call this method",
        data: {
            methodId,
        },
    };
}
export function createCurrencyNotFound(currencyId) {
    return {
        code: "CURRENCY_NOT_FOUND",
        message: "targeted currency is not supported in the current wallet",
        data: {
            currencyId,
        },
    };
}
export function createAccountNotFound(accountId) {
    return {
        code: "ACCOUNT_NOT_FOUND",
        message: "targeted account was not found in the current wallet",
        data: {
            accountId,
        },
    };
}
export function createUnknownError(error) {
    return {
        code: "UNKNOWN_ERROR",
        message: "an unhandled error was thrown",
        data: error,
    };
}
