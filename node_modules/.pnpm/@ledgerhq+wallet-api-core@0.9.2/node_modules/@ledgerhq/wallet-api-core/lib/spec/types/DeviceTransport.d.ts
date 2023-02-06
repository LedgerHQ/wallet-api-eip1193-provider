import { z } from "zod";
declare const schemaDeviceType: z.ZodEnum<["blue", "nanoS", "nanoSP", "nanoX", "stax"]>;
export declare type DeviceType = z.infer<typeof schemaDeviceType>;
declare const schemaDeviceTransportParams: z.ZodObject<{
    /** Select the BOLOS App. If undefined selects BOLOS */
    appName: z.ZodOptional<z.ZodString>;
    /**
     * Checks the BOLOS App version range. If undefined no checks
     * Can be any ranges supported here: https://github.com/npm/node-semver#ranges
     */
    appVersionRange: z.ZodOptional<z.ZodString>;
    /**
     * Checks the BOLOS Firmware version range. If undefined no checks
     * Can be any ranges supported here: https://github.com/npm/node-semver#ranges
     */
    firmwareVersionRange: z.ZodOptional<z.ZodString>;
    /**
     * Checks if the device is seeded. If undefined no checks
     */
    seeded: z.ZodOptional<z.ZodBoolean>;
    /**
     * Checks if the device matches one of the types. If undefined no checks
     */
    devices: z.ZodOptional<z.ZodArray<z.ZodEnum<["blue", "nanoS", "nanoSP", "nanoX", "stax"]>, "atleastone">>;
}, "strip", z.ZodTypeAny, {
    appName?: string | undefined;
    appVersionRange?: string | undefined;
    firmwareVersionRange?: string | undefined;
    seeded?: boolean | undefined;
    devices?: ["blue" | "nanoS" | "nanoSP" | "nanoX" | "stax", ...("blue" | "nanoS" | "nanoSP" | "nanoX" | "stax")[]] | undefined;
}, {
    appName?: string | undefined;
    appVersionRange?: string | undefined;
    firmwareVersionRange?: string | undefined;
    seeded?: boolean | undefined;
    devices?: ["blue" | "nanoS" | "nanoSP" | "nanoX" | "stax", ...("blue" | "nanoS" | "nanoSP" | "nanoX" | "stax")[]] | undefined;
}>;
declare const schemaDeviceTransportResults: z.ZodObject<{
    transportId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transportId: string;
}, {
    transportId: string;
}>;
export declare const schemaDeviceTransport: {
    params: z.ZodObject<{
        /** Select the BOLOS App. If undefined selects BOLOS */
        appName: z.ZodOptional<z.ZodString>;
        /**
         * Checks the BOLOS App version range. If undefined no checks
         * Can be any ranges supported here: https://github.com/npm/node-semver#ranges
         */
        appVersionRange: z.ZodOptional<z.ZodString>;
        /**
         * Checks the BOLOS Firmware version range. If undefined no checks
         * Can be any ranges supported here: https://github.com/npm/node-semver#ranges
         */
        firmwareVersionRange: z.ZodOptional<z.ZodString>;
        /**
         * Checks if the device is seeded. If undefined no checks
         */
        seeded: z.ZodOptional<z.ZodBoolean>;
        /**
         * Checks if the device matches one of the types. If undefined no checks
         */
        devices: z.ZodOptional<z.ZodArray<z.ZodEnum<["blue", "nanoS", "nanoSP", "nanoX", "stax"]>, "atleastone">>;
    }, "strip", z.ZodTypeAny, {
        appName?: string | undefined;
        appVersionRange?: string | undefined;
        firmwareVersionRange?: string | undefined;
        seeded?: boolean | undefined;
        devices?: ["blue" | "nanoS" | "nanoSP" | "nanoX" | "stax", ...("blue" | "nanoS" | "nanoSP" | "nanoX" | "stax")[]] | undefined;
    }, {
        appName?: string | undefined;
        appVersionRange?: string | undefined;
        firmwareVersionRange?: string | undefined;
        seeded?: boolean | undefined;
        devices?: ["blue" | "nanoS" | "nanoSP" | "nanoX" | "stax", ...("blue" | "nanoS" | "nanoSP" | "nanoX" | "stax")[]] | undefined;
    }>;
    result: z.ZodObject<{
        transportId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        transportId: string;
    }, {
        transportId: string;
    }>;
};
export declare type DeviceTransport = {
    params: z.infer<typeof schemaDeviceTransportParams>;
    result: z.infer<typeof schemaDeviceTransportResults>;
};
export declare type DeviceTransportHandler = (params: DeviceTransport["params"]) => DeviceTransport["result"];
export {};
//# sourceMappingURL=DeviceTransport.d.ts.map