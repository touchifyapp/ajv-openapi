import { createAjv } from "./helpers";

describe("double", () => {

    it("should be true if value is a double and is in range", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "number", format: "double" });

        expect(validator("3.4E+39")).toBe(true);
        expect(validator(-9234234)).toBe(true);
        expect(validator(0)).toBe(true);
        expect(validator(1)).toBe(true);
        expect(validator(1.0)).toBe(true);
        expect(validator(999)).toBe(true);
        expect(validator(912312399)).toBe(true);
        expect(validator("-3.4E+39")).toBe(true);
    });

    it("should be false if value is a double and is out-of-range", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "number", format: "double" });

        expect(validator(Number.NEGATIVE_INFINITY)).toBe(false);
        expect(validator(Number.POSITIVE_INFINITY)).toBe(false);
    });

    it("should be false if value is not a double", () => {
        const ajv = createAjv();
        const validator = ajv.compile({ type: "number", format: "double" });

        expect(validator("a")).toBe(false);
        expect(validator(new Date())).toBe(false);
        expect(validator({})).toBe(false);
        expect(validator([])).toBe(false);
    });

});
