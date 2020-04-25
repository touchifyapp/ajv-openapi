import * as Ajv from "ajv";
import * as openapi from "../";

export function createAjv(extend = true): Ajv.Ajv {
    const ajv = new Ajv({
        schemaId: "auto",
        format: "full",
        coerceTypes: true,
        unknownFormats: "ignore",
        useDefaults: true,
        nullable: true
    });

    return extend ? openapi(ajv) : ajv;
}