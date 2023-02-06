/// <reference types="node" />
import type { IEthereumProvider, ProviderAccounts, RequestArguments } from "./eip1193Provider";
import { EventEmitter } from "events";
import { Account, WalletAPIClient } from "@ledgerhq/wallet-api-client";
export declare class WalletApiEIP1193Provider extends EventEmitter implements IEthereumProvider {
    walletInstance: WalletAPIClient | null;
    account: Account | null;
    initializing: Promise<void> | null;
    constructor();
    private initialize;
    enable(): Promise<ProviderAccounts>;
    request({ method, params }: RequestArguments): Promise<unknown>;
}
//# sourceMappingURL=WalletApiEip1193Provider.d.ts.map