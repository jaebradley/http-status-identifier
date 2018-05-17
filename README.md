# HTTP Status Identifier

[![Build Status](https://travis-ci.org/jaebradley/http-status-identifier.svg?branch=master)](https://travis-ci.org/jaebradley/http-status-identifier)
[![Coverage Status](https://coveralls.io/repos/github/jaebradley/http-status-code-definition-identifier/badge.svg?branch=master)](https://coveralls.io/github/jaebradley/http-status-code-definition-identifier?branch=master)
[![npm version](https://badge.fury.io/js/http-status-identifier.svg)](https://badge.fury.io/js/http-status-identifier)
[![npm](https://img.shields.io/npm/dt/http-status-identifier.svg)](https://www.npmjs.com/package/http-status-identifier)

## Purpose

A simple Node JS client that returns an [HTTP Status](https://github.com/jaebradley/http-status-identifier/blob/master/src/data/HttpStatus.js), wrapped in a Promise, given either a status code (i.e `200`) or the status name (i.e `I'm a teapot`).

It also returns an [HTTP Status Family](https://github.com/jaebradley/http-status-identifier/blob/master/src/data/HttpStatusFamily.js) (`INFORMATIONAL` or `1xx`, `SUCCESS` or `2xx`, `REDIRECTION` or `3xx`, `CLIENT ERROR` or `4xx`, `SERVER ERROR` or `5xx`) given a status family name or a specific HTTP Status.

## Installation

Install via [NPM](https://www.npmjs.com/package/http-status-identifier).
```
npm install http-status-identifier
```

## API

### HTTP Statuses

To retrieve HTTP statuses use the `identifyStatus` method.

The `identifyStatus` method expects either
1. an HTTP status code, represented as a `string` or a `number`
2. an HTTP status name, represented as a `string`

The returned [`HttpStatus`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/data/HttpStatus.js) object contains the following fields:
* `name`: A `string` which represents the name for the HTTP status
* `code`: A `number` which represents the code for the HTTP status
* `description`: A `string` that provides a brief overview of the HTTP status
* `supplementaryInformation`: A `string` that provides additional information for the HTTP status. This field may be empty where additional information is not necessary.
* `documentationUrl`: A `string` that represents the URL where official documentation for the HTTP status is found. This is often a URL to RFC documentation.

#### Example

```javascript
import { identifyStatus } from 'http-status-identifier';

// Returns HttpStatus.OK
const okHttpStatus = identifyStatus(200);

// Returns HttpStatus.IM_A_TEAPOT
const imATeapotHttpStatus = identifyStatus("I'm a teapot");

// Returns HttpStatus.BAD_REQUEST
const badRequestHttpStatus = identifyStatus('400');
```

### HTTP Status Families

To retrieve the HTTP Family for a given status use the `identifyFamily` method.

The `identifyFamily` method expects either
1. an HTTP status code, represented as a `string` or a `number`
2. an HTTP status name, represented as a `string`

#### Example

```javascript
import { identifyFamily } from 'http-status-identifier';

// Returns HttpStatusFamily.SUCCESS
const successFamily = identifyFamily('sUcCesS');

// Returns HttpStatusFamily.SUCCESS
const successFamilyAgain = identifyFamily(200);
```
