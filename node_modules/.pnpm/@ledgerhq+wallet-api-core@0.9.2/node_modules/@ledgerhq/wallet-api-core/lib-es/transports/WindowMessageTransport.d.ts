import { Logger } from "../logger";
import type { MessageHandler, Transport } from "./types";
export default class WindowMessageTransport implements Transport {
    private target;
    private logger;
    private _onMessage;
    constructor(target?: Window, logger?: Logger);
    connect: () => void;
    disconnect: () => void;
    _onMessageEvent: (event: MessageEvent) => void;
    set onMessage(handler: MessageHandler | undefined);
    get onMessage(): MessageHandler | undefined;
    send: (message: string) => Promise<void>;
}
//# sourceMappingURL=WindowMessageTransport.d.ts.map