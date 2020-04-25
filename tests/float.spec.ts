import { createAjv } from "./helpers";

describe("float", () => {

    it("should be true if value is a float and is in range", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "number", format: "float" });

        expect(validator("3.4E+38")).toBe(true);
        expect(validator(-9234234)).toBe(true);
        expect(validator(0)).toBe(true);
        expect(validator(1)).toBe(true);
        expect(validator(1.0)).toBe(true);
        expect(validator(999)).toBe(true);
        expect(validator(912312399)).toBe(true);
        expect(validator("-3.4E+38")).toBe(true);
    });

    it("should be false if value is a float and is out-of-range", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "number", format: "float" });

        expect(validator(Number.NEGATIVE_INFINITY)).toBe(false);
        expect(validator(Number.POSITIVE_INFINITY)).toBe(false);
    });

    it("should be false if value is not a float", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "number", format: "float" });

        expect(validator("a")).toBe(false);
        expect(validator(new Date())).toBe(false);
        expect(validator({})).toBe(false);
        expect(validator([])).toBe(false);
    });

});
