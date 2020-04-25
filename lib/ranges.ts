import { Decimal } from "decimal.js";

export const BYTE_RANGE = {
    min: new Decimal("-128"),
    max: new Decimal("127")
};

export const INT32_RANGE = {
    min: new Decimal("-2147483648"),
    max: new Decimal("2147483647")
};

export const INT64_RANGE = {
    min: new Decimal("-9223372036854775808"),
    max: new Decimal("9223372036854775807")
};

export const FLOAT_RANGE = {
    min: new Decimal(2).pow(128).negated(),
    max: new Decimal(2).pow(128),
};

export const DOUBLE_RANGE = {
    min: new Decimal(2).pow(1024).negated(),
    max: new Decimal(2).pow(1024)
};
