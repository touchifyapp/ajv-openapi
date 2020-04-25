import { createAjv } from "./helpers";

describe("int64", () => {

    it("should be true if value is an integer and is in range", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "integer", format: "int64" });

        // expect(validator("-9223372036854775808")).toBe(true);
        expect(validator(-9234234)).toBe(true);
        expect(validator(0)).toBe(true);
        expect(validator(1)).toBe(true);
        expect(validator(1.0)).toBe(true);
        expect(validator(999)).toBe(true);
        expect(validator(912312399)).toBe(true);
        // expect(validator("9223372036854775807")).toBe(true);
    });

    it("should be false if value is an integer and out-of-range", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "integer", format: "int64" });

        expect(validator("-9223372036854775808")).toBe(false);
        expect(validator("9223372036854775807")).toBe(false);
    });

    it("should be false if value is not an integer", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "integer", format: "int64" });

        expect(validator(1.1)).toBe(false);
        expect(validator(-923423.4)).toBe(false);
        expect(validator(-1.1)).toBe(false);
        expect(validator("a")).toBe(false);
        expect(validator(new Date())).toBe(false);
        expect(validator({})).toBe(false);
        expect(validator([])).toBe(false);
    });

});
