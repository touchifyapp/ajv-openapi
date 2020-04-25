import { createAjv } from "./helpers";

describe("byte", () => {

    it("should be true if value is an encoded string", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "string", format: "byte" });

        expect(validator("5L2g5aW95ZWK")).toBe(true);
        expect(validator("MTIz")).toBe(true);
        expect(validator("QCPvv6VAI++/pQ==")).toBe(true);
    });

    it("should be false if value is not an encoded string", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "string", format: "byte" });

        expect(validator("1")).toBe(false);
        expect(validator("abc")).toBe(false);
    });

});
