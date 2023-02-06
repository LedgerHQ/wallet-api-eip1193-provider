import { z } from "zod";
import { RpcError } from "./RPCError";
import { RpcErrorCode, } from "./types";
import { schemaRPCCall } from "./validation";
export function parseRPCCall(data) {
    try {
        const parsedData = JSON.parse(data);
        const rpcCall = schemaRPCCall.parse(parsedData);
        return rpcCall;
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            throw new RpcError({
                code: RpcErrorCode.PARSE_ERROR,
                message: "parse error",
            });
        }
        if (error instanceof z.ZodError) {
            throw new RpcError({
                code: RpcErrorCode.INVALID_REQUEST,
                message: "invalid request",
            });
        }
        throw error;
    }
}
export function createRpcRequest(params) {
    return {
        jsonrpc: "2.0",
        ...params,
    };
}
export function createRpcResponse(params) {
    return {
        jsonrpc: "2.0",
        ...params,
    };
}
