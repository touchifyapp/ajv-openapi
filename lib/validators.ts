/**
 * OpenAPI 3.0.0 data types format
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#data-types
 */

import {
    INT32_RANGE,
    INT64_RANGE,
    FLOAT_RANGE,
    DOUBLE_RANGE
} from "./ranges";

/** Check if the data is an int32. */
export function int32(data: string | number): boolean {
    return (
        Number.isInteger(+data) &&
        INT32_RANGE.max.greaterThanOrEqualTo(data) &&
        INT32_RANGE.min.lessThanOrEqualTo(data)
    );
}

/** Check if data is an int64. */
export function int64(data: string | number): boolean {
    return (
        Number.isInteger(+data) &&
        INT64_RANGE.max.greaterThanOrEqualTo(data) &&
        INT64_RANGE.min.lessThanOrEqualTo(data)
    );
}

/** Check if data is a float. */
export function float(data: string | number): boolean {
    return (
        FLOAT_RANGE.max.greaterThanOrEqualTo(data) &&
        FLOAT_RANGE.min.lessThanOrEqualTo(data)
    );
}

/** Check if data is a double. */
export function double(data: string | number): boolean {
    return (
        DOUBLE_RANGE.max.greaterThanOrEqualTo(data) &&
        DOUBLE_RANGE.min.lessThanOrEqualTo(data)
    );
}

/**
 * Check if data is a base64 encoded string.
 * https://github.com/chriso/validator.js/blob/master/src/lib/isBase64.js
 */
export function byte(data: string): boolean {
    const notBase64 = /[^A-Z0-9+/=]/i;

    const len = data.length;
    if (!len || len % 4 !== 0 || notBase64.test(data)) {
        return false;
    }

    const firstPaddingChar = data.indexOf('=');
    return firstPaddingChar === -1 ||
        firstPaddingChar === len - 1 ||
        (firstPaddingChar === len - 2 && data[len - 1] === '=');
}