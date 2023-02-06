import type { WalletAPIClient, Account } from "@ledgerhq/wallet-api-client";
export declare class WalletController {
    walletInstance: WalletAPIClient;
    root: HTMLDivElement | null;
    accounts: Account[] | null;
    constructor(walletInstance: WalletAPIClient);
    private spawnTopBar;
    initialize(): Promise<void>;
}
//# sourceMappingURL=WalletController.d.ts.map