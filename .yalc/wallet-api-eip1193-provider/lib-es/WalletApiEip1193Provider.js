import { EventEmitter } from "events";
import { WalletAPIClient, WindowMessageTransport } from "@ledgerhq/wallet-api-client";
import { personalSignParams, sendTransactionParams, signTypedDataParams, switchEthereumChainParams, } from "./validation";
import { getSupportedCurrencyIds, getChainConfigForChainId, getChainConfigForCurrencyId, } from "./chainConfig";
import { convertEthToLiveTX, matchAddresses } from "./helpers";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
export class WalletApiEIP1193Provider extends EventEmitter {
    walletInstance = null;
    account = null;
    initializing = null;
    constructor() {
        super();
    }
    async initialize() {
        if (!this.walletInstance) {
            const transport = new WindowMessageTransport();
            this.walletInstance = new WalletAPIClient(transport);
            transport.connect();
        }
        const supportedCurrencyIds = getSupportedCurrencyIds();
        this.account = await this.walletInstance.requestAccount({ currencyIds: supportedCurrencyIds });
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
                const chainConfig = getChainConfigForCurrencyId(this.account.currency);
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
                const [{ chainId: hexChainId }] = switchEthereumChainParams.parse(params);
                const chainId = parseInt(hexChainId, 16);
                const chainConfig = getChainConfigForChainId(chainId);
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
                const [transaction] = sendTransactionParams.parse(params);
                if (!matchAddresses(transaction.from, this.account.address)) {
                    throw new Error("Transaction doesn't originate from selected Account");
                }
                const txHash = await this.walletInstance.signTransactionAndBroadcast(this.account.id, convertEthToLiveTX(transaction));
                return txHash;
            }
            case "personal_sign": {
                if (!this.walletInstance) {
                    throw new Error("No walletInstance");
                }
                if (!this.account) {
                    throw new Error("No account selected");
                }
                const [message, address, _password] = personalSignParams.parse(params);
                if (!matchAddresses(address, this.account.address)) {
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
                const [message, address, _password] = signTypedDataParams.parse(params);
                if (!matchAddresses(address, this.account.address)) {
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
                    id: uuidv4(),
                    method,
                    params,
                };
                console.log("request: ", jsonRPCRequest);
                const chainConfig = getChainConfigForCurrencyId(this.account.currency);
                console.log({ chainConfig });
                if (chainConfig.nodeURL.startsWith("https:")) {
                    const { data } = await axios.post(chainConfig.nodeURL, jsonRPCRequest);
                    console.log("response: ", data);
                    return data.result;
                }
            }
        }
        return;
    }
}
