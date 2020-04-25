import * as Ajv from "ajv";
import * as openapi from "../";

export function createAjv(extend = true): Ajv.Ajv {
    const ajv = new Ajv(openapi.createOptions());
    return extend ? openapi(ajv) : ajv;
}