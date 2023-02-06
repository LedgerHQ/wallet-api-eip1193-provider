"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletApiEIP1193Provider = void 0;
const events_1 = require("events");
const wallet_api_client_1 = require("@ledgerhq/wallet-api-client");
const validation_1 = require("./validation");
const chainConfig_1 = require("./chainConfig");
const helpers_1 = require("./helpers");
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
class WalletApiEIP1193Provider extends events_1.EventEmitter {
    walletInstance = null;
    account = null;
    initializing = null;
    root = null;
    constructor() {
        super();
    }
    spawnTopBar() {
        if (this.root) {
            throw new Error("Already initialized");
        }
        const root = document.createElement("div");
        const height = 36;
        const padding = 6;
        root.style.border = "none";
        root.style.boxSizing = "border-box";
        root.style.height = `${height}px`;
        root.style.background = "black";
        root.style.left = "0px";
        root.style.padding = padding + "px";
        root.style.position = "fixed";
        root.style.top = "0px";
        root.style.width = "100%";
        root.style.color = "white";
        root.style.borderBottom = "grey solid 1px";
        const content = document.createTextNode("Ledger");
        root.appendChild(content);
        document.documentElement.appendChild(root);
        /* For a better UI experience convert relative height to absolute */
        const heightInPixels = parseInt(window.getComputedStyle(root).height);
        root.style.height = `${heightInPixels + 2 * padding}px`;
        /* Shift down the body's CSS (in order not to break anything) */
        document.body.style.transform = `translateY(${root.style.height})`;
        this.root = root;
    }
    async initialize() {
        if (!this.walletInstance) {
            const transport = new wallet_api_client_1.WindowMessageTransport();
            this.walletInstance = new wallet_api_client_1.WalletAPIClient(transport);
            transport.connect();
        }
        const supportedCurrencyIds = (0, chainConfig_1.getSupportedCurrencyIds)();
        this.account = await this.walletInstance.requestAccount({ currencyIds: supportedCurrencyIds });
        this.spawnTopBar();
    }
    enable() {
        return this.request({ method: "enable" });
    }
    async request({ method, params }) {
        console.log(`DEBUG: method=${method}, params=${JSON.stringify(params, null, 2)}`);
        if (this.initializing) {
            await this.initializing;
        }
        if (!this.account && !this.initializing) {
            this.initializing = this.initialize();
            await this.initializing;
            this.initializing = null;
        }
        switch (method) {
            case "eth_chainId": {
                if (!this.account) {
                    throw new Error("No account selected");
                }
                const chainConfig = (0, chainConfig_1.getChainConfigForCurrencyId)(this.account.currency);
                return `0x${chainConfig.chainID.toString(16)}`;
            }
            case "eth_requestAccounts":
            case "enable":
            case "eth_accounts": {
                if (!this.account) {
                    throw new Error("No account selected");
                }
                return [this.account.address];
            }
            case "wallet_switchEthereumChain": {
                if (!this.walletInstance) {
                    throw new Error("No walletInstance");
                }
                const [{ chainId: hexChainId }] = validation_1.switchEthereumChainParams.parse(params);
                const chainId = parseInt(hexChainId, 16);
                const chainConfig = (0, chainConfig_1.getChainConfigForChainId)(chainId);
                const account = await this.walletInstance.requestAccount({
                    currencyIds: [chainConfig.currencyId],
                });
                this.account = account;
                break;
            }
            case "eth_sendTransaction": {
                if (!this.walletInstance) {
                    throw new Error("No walletInstance");
                }
                if (!this.account) {
                    throw new Error("No account selected");
                }
                const [transaction] = validation_1.sendTransactionParams.parse(params);
                if (!(0, helpers_1.matchAddresses)(transaction.from, this.account.address)) {
                    throw new Error("Transaction doesn't originate from selected Account");
                }
                const txHash = await this.walletInstance.signTransactionAndBroadcast(this.account.id, (0, helpers_1.convertEthToLiveTX)(transaction));
                return txHash;
            }
            case "personal_sign": {
                if (!this.walletInstance) {
                    throw new Error("No walletInstance");
                }
                if (!this.account) {
                    throw new Error("No account selected");
                }
                const [message, address, _password] = validation_1.personalSignParams.parse(params);
                if (!(0, helpers_1.matchAddresses)(address, this.account.address)) {
                    throw new Error("Transaction doesn't originate from selected Account");
                }
                const signedMessage = await this.walletInstance.signMessage(this.account.id, Buffer.from(message.replace("0x", ""), "hex"));
                return signedMessage.toString("hex");
            }
            case method.match(/eth_signTypedData(_v.)?$/)?.input: {
                if (!this.walletInstance) {
                    throw new Error("No walletInstance");
                }
                if (!this.account) {
                    throw new Error("No account selected");
                }
                const [message, address, _password] = validation_1.signTypedDataParams.parse(params);
                if (!(0, helpers_1.matchAddresses)(address, this.account.address)) {
                    throw new Error("Transaction doesn't originate from selected Account");
                }
                const signedMessage = await this.walletInstance.signMessage(this.account.id, Buffer.from(message.replace("0x", ""), "hex"));
                return signedMessage.toString("hex");
            }
            default: {
                if (!this.account) {
                    throw new Error("No account selected");
                }
                const jsonRPCRequest = {
                    jsonrpc: "2.0",
                    id: (0, uuid_1.v4)(),
                    method,
                    params,
                };
                console.log("request: ", jsonRPCRequest);
                const chainConfig = (0, chainConfig_1.getChainConfigForCurrencyId)(this.account.currency);
                console.log({ chainConfig });
                if (chainConfig.nodeURL.startsWith("https:")) {
                    const { data } = await axios_1.default.post(chainConfig.nodeURL, jsonRPCRequest);
                    console.log("response: ", data);
                    return data.result;
                }
            }
        }
        return;
    }
}
exports.WalletApiEIP1193Provider = WalletApiEIP1193Provider;
