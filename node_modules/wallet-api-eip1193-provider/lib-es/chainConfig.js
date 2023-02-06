const chainConfigs = [
    {
        "currencyId": "ethereum",
        "chainID": 1,
        "nodeURL": "https://eth-mainnet.ws.alchemyapi.io/v2/0fyudoTG94QWC0tEtfJViM9v2ZXJuij2"
    },
    {
        "currencyId": "bsc",
        "chainID": 56,
        "nodeURL": "https://bsc-dataseed.binance.org/"
    },
    {
        "currencyId": "polygon",
        "chainID": 137,
        "nodeURL": "https://polygon-mainnet.g.alchemy.com/v2/oPIxZM7kXsPVVY1Sk0kOQwkoIOpSu8PE"
    }
];
export function getChainConfigForCurrencyId(currencyId) {
    const chainConfig = chainConfigs.find(config => config.currencyId === currencyId);
    if (!chainConfig) {
        throw new Error(`No chain config for currency id "${currencyId}"`);
    }
    return chainConfig;
}
export function getChainConfigForChainId(chainId) {
    const chainConfig = chainConfigs.find(config => config.chainID === chainId);
    if (!chainConfig) {
        throw new Error(`No chain config for chain id "${chainId}"`);
    }
    return chainConfig;
}
export function getSupportedCurrencyIds() {
    return chainConfigs.map(config => config.currencyId);
}
