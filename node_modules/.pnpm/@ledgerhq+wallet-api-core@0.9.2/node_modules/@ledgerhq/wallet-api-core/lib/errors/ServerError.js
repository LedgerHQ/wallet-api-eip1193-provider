"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    errorData;
    constructor(errorData) {
        super(errorData.message);
        this.errorData = errorData;
    }
    /**
     * Retrieve error code
     * @returns error code
     */
    getCode() {
        return this.errorData.code;
    }
    /**
     * Retrieve underlying data info
     * @returns data info
     */
    getData() {
        return this.errorData;
    }
}
exports.ServerError = ServerError;
