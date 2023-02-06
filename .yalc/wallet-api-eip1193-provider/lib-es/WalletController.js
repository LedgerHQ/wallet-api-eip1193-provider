export class WalletController {
    walletInstance;
    root = null;
    accounts = null;
    constructor(walletInstance) {
        this.walletInstance = walletInstance;
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
        this.spawnTopBar();
        const accounts = await this.walletInstance.listAccounts({ currencyIds: ["ethereum", "polygon", "bsc"] });
        this.accounts = accounts;
    }
}
