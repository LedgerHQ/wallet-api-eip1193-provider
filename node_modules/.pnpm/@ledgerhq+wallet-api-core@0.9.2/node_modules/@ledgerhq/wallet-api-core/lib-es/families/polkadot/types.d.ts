import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaPolkadotOperationMode, schemaRawPolkadotTransaction } from "./validation";
export declare type PolkadotOperationMode = z.infer<typeof schemaPolkadotOperationMode>;
export interface PolkadotTransaction extends TransactionCommon {
    readonly family: RawPolkadotTransaction["family"];
    mode: PolkadotOperationMode;
    fee?: BigNumber;
    era?: number;
}
export declare type RawPolkadotTransaction = z.infer<typeof schemaRawPolkadotTransaction>;
//# sourceMappingURL=types.d.ts.map