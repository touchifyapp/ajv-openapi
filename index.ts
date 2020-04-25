import type { Ajv } from "ajv";

import {
    int32,
    int64,
    float,
    double,
    byte
} from "./lib/validators";

export = ajvOpenApi;

function ajvOpenApi(ajv: Ajv, options?: ajvOpenApi.AjvOpenApiOptions): Ajv {
    if (options?.useDraft04) {
        ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-04.json"));
    }

    ajv.addFormat("int32", { type: "number", validate: int32 });
    ajv.addFormat("int64", { type: "number", validate: int64 });
    ajv.addFormat("float", { type: "number", validate: float });
    ajv.addFormat("double", { type: "number", validate: double });
    ajv.addFormat("byte", { type: "string", validate: byte });

    return ajv;
}

namespace ajvOpenApi {
    export interface AjvOpenApiOptions {
        useDraft04?: boolean;
    }
}
