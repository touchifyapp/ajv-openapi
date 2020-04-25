# ajv-openapi

[![License](http://img.shields.io/badge/license-MIT-green.svg)](http://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/ajv-openapi.svg?style=flat-square)](https://npmjs.org/package/ajv-openapi)
[![NPM download](https://img.shields.io/npm/dm/ajv-openapi.svg?style=flat-square)](https://npmjs.org/package/ajv-openapi)
[![Build Status](https://travis-ci.org/touchifyapp/ajv-openapi.svg?branch=master)](https://travis-ci.org/touchifyapp/ajv-openapi)
[![Test Coverage](https://coveralls.io/repos/github/touchifyapp/ajv-openapi/badge.svg)](https://coveralls.io/github/touchifyapp/ajv-openapi)
[![Dependency Status](https://img.shields.io/david/amazing-gao/ajv-oai.svg)](https://david-dm.org/amazing-gao/ajv-oai)

[Ajv](https://github.com/epoberezkin/ajv) plugin that adds Open API v3 [data types](http://swagger.io/specification/#dataTypeFormat) (formats: int32, int64, float, double, byte) validation.

## Installation 

```bash
npm install ajv ajv-openapi
```

## Usage

```javascript
const Ajv = require("ajv");
const openApi = require("ajv-openapi");

const ajv = openApi(new Ajv());
```

## Configuration for full OpenAPI compatibility

By default, the plugin only adds missing formats to Ajv validator.
To configure Ajv to be fully Open API v3 compliant, you should configure the plugin like this:

```javascript
const Ajv = require("ajv");
const openApi = require("ajv-openapi");

const ajvOptions = {
    schemaId: "auto",
    format: "full",
    coerceTypes: true,
    unknownFormats: "ignore",
    useDefaults: true,
    nullable: true
};

const openApiOptions = {
    useDraft04: true
};

const ajv = openApi(
    new Ajv(ajvOptions),
    openApiOptions
);
```

## Examples

```javascript
console.log(ajv.compile({ type: "integer", format: "int32" })(2147483648));
console.log(ajv.compile({ type: "integer", format: "int32" })(-2147483649));
console.log(ajv.compile({ type: "integer", format: "int32" })(1.23));
console.log(ajv.compile({ type: "integer", format: "int32" })(123));
> false
> false
> false
> true

console.log(ajv.compile({ type: "integer", format: "int64" })(Number.MAX_VALUE));
console.log(ajv.compile({ type: "integer", format: "int64" })(Number.MIN_VALUE));
console.log(ajv.compile({ type: "integer", format: "int64" })(1.23));
console.log(ajv.compile({ type: "integer", format: "int64" })(123));
> false
> false
> false
> true

console.log(ajv.compile({ type: "number", format: "float" })(Number.MAX_VALUE));
console.log(ajv.compile({ type: "number", format: "float" })(Number.MIN_VALUE));
console.log(ajv.compile({ type: "number", format: "float" })(1.23));
console.log(ajv.compile({ type: "number", format: "float" })(123));
> false
> false
> true
> true

console.log(ajv.compile({ type: "number", format: "double" })(Number.MAX_VALUE));
console.log(ajv.compile({ type: "number", format: "double" })(Number.MIN_VALUE));
console.log(ajv.compile({ type: "number", format: "double" })(1.23));
console.log(ajv.compile({ type: "number", format: "double" })(123));
> true
> true
> true
> true

console.log(ajv.compile({ type: "string", format: "byte" })("MTIz"));
console.log(ajv.compile({ type: "string", format: "byte" })("abc"));
console.log(ajv.compile({ type: "string", format: "byte" })(1));
console.log(ajv.compile({ type: "string", format: "byte" })("5L2g5aW95ZWK"));
> true
> false
> false
> true
```