export class RpcError extends Error {
    err;
    constructor(err) {
        super(err.message);
        this.err = err;
    }
    /**
     * Retrieve error code
     * @returns error code
     */
    getCode() {
        return this.err.code;
    }
    /**
     * Retrieve underlying data info
     * @returns data info
     */
    getData() {
        return this.err.data;
    }
}
