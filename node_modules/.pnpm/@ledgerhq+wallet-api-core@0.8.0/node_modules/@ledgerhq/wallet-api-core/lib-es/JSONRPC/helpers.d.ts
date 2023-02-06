import { RpcRequest, RpcResponse, RpcResponseError } from "./types";
export declare function parseRPCCall(data: string): RpcRequest | RpcResponse;
declare type CreateRpcRequestParams<T> = {
    id?: string | number | null;
    method: string;
    params?: T;
};
export declare function createRpcRequest<T>(params: CreateRpcRequestParams<T>): RpcRequest<string, T>;
declare type CreateRpcResponseParams<T, E> = {
    id: string | number | null;
    result: T;
} | {
    id: string | number | null;
    error: RpcResponseError<E>;
};
export declare function createRpcResponse<T, E>(params: CreateRpcResponseParams<T, E>): RpcResponse<T, E>;
export {};
//# sourceMappingURL=helpers.d.ts.map