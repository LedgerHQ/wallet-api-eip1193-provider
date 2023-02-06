import type { EthereumTransaction, RawEthereumTransaction } from "./types";
export declare function serializeEthereumTransaction({ family, amount, recipient, nonce, data, gasPrice, gasLimit, }: EthereumTransaction): RawEthereumTransaction;
export declare function deserializeEthereumTransaction({ family, amount, recipient, nonce, data, gasPrice, gasLimit, }: RawEthereumTransaction): EthereumTransaction;
//# sourceMappingURL=serializer.d.ts.map