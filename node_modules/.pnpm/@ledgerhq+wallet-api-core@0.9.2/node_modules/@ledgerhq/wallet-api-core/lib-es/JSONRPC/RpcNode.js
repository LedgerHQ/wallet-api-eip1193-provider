import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { serializeError, deserializeError } from "@ledgerhq/errors";
import { createUnknownError, schemaServerErrorData, ServerError, } from "../errors";
import { parseRPCCall, createRpcResponse } from "./helpers";
import { RpcError } from "./RPCError";
import { RpcErrorCode } from "./types";
export class RpcNode {
    transport;
    requestHandlers;
    ongoingRequests = {};
    constructor(transport, requestHandlers) {
        this.transport = transport;
        this.requestHandlers = requestHandlers;
        this.transport.onMessage = (message) => {
            void this.handleMessage(message);
        };
    }
    _request(request) {
        return new Promise((resolve, reject) => {
            if (!request.id) {
                reject(new Error("requests need to have an id"));
                return;
            }
            const resolver = (response) => {
                if ("error" in response) {
                    if (response.error.code === RpcErrorCode.SERVER_ERROR) {
                        const serverErrorData = schemaServerErrorData.parse(response.error.data);
                        if (serverErrorData.code === "UNKNOWN_ERROR") {
                            reject(deserializeError(serverErrorData.data));
                            return;
                        }
                        reject(new ServerError(serverErrorData));
                        return;
                    }
                    reject(new RpcError(response.error));
                    return;
                }
                resolve(response.result);
            };
            this.ongoingRequests[request.id] = resolver;
            this.transport.send(JSON.stringify(request));
        });
    }
    _notify(request) {
        this.transport.send(JSON.stringify(request));
    }
    request(method, params) {
        const requestId = uuidv4();
        return this._request({
            id: requestId,
            jsonrpc: "2.0",
            method,
            params,
        });
    }
    notify(method, params) {
        return this._notify({
            jsonrpc: "2.0",
            method,
            params,
        });
    }
    async handleRpcRequest(request) {
        try {
            const result = await this.onRequest(request);
            if (request.id) {
                const response = createRpcResponse({
                    id: request.id,
                    result,
                });
                this.transport.send(JSON.stringify(response));
            }
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                throw new RpcError({
                    code: RpcErrorCode.INVALID_PARAMS,
                    message: error.message,
                    data: error.flatten(),
                });
            }
            if (error instanceof ServerError) {
                throw new RpcError({
                    code: RpcErrorCode.SERVER_ERROR,
                    message: "unexpected server error",
                    data: error.getData(),
                });
            }
            if (error instanceof RpcError) {
                throw error;
            }
            throw new RpcError({
                code: RpcErrorCode.SERVER_ERROR,
                message: "unexpected server error",
                // @ts-expect-error: Bad typings on serialize error !!
                data: createUnknownError(serializeError(error)),
            });
        }
    }
    async handleMessage(message) {
        let isResponse = false;
        let callId;
        try {
            const rpcCall = parseRPCCall(message);
            callId = rpcCall.id;
            if ("method" in rpcCall) {
                // message is a request
                await this.handleRpcRequest(rpcCall);
            }
            else {
                // message is a response
                isResponse = true;
                this.handleRpcResponse(rpcCall);
            }
        }
        catch (error) {
            if (isResponse) {
                throw error;
            }
            if (error instanceof RpcError) {
                const errorResponse = createRpcResponse({
                    id: callId || null,
                    error: {
                        code: error.getCode(),
                        message: error.message,
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        data: error.getData(),
                    },
                });
                this.transport.send(JSON.stringify(errorResponse));
                return;
            }
            // TODO handle no RpcError (that should not happen btw)
            throw error;
        }
    }
    handleRpcResponse(response) {
        if (!response.id) {
            return;
        }
        const resolver = this.ongoingRequests[response.id];
        if (!resolver) {
            throw new Error(`no ongoingRequest ${response.id}`);
        }
        resolver(response);
    }
}
