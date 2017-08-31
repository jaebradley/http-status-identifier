# HTTP Status Identifier

[![Build Status](https://travis-ci.org/jaebradley/http-status-identifier.svg?branch=master)](https://travis-ci.org/jaebradley/http-status-identifier)
[![Coverage Status](https://coveralls.io/repos/github/jaebradley/http-status-code-definition-identifier/badge.svg?branch=master)](https://coveralls.io/github/jaebradley/http-status-code-definition-identifier?branch=master)
[![npm version](https://badge.fury.io/js/http-status-identifier.svg)](https://badge.fury.io/js/http-status-identifier)

### Purpose

A simple Node JS client that returns an [HTTP Status](https://github.com/jaebradley/http-status-identifier/blob/master/src/data/HttpStatus.js), wrapped in a Promise, given either a status code (i.e `200`) or the status name (i.e `I'm a teapot`).

It also returns an [HTTP Status Family](https://github.com/jaebradley/http-status-identifier/blob/master/src/data/HttpStatusFamily.js) (`INFORMATIONAL` or `1xx`, `SUCCESS` or `2xx`, `REDIRECTION` or `3xx`, `CLIENT ERROR` or `4xx`, `SERVER ERROR` or `5xx`) given a status family name or a specific HTTP Status.

### Installation

Install via [NPM](https://www.npmjs.com/package/http-status-identifier).
```
npm install http-status-identifier
```

### API

#### HTTP Statuses

To retrieve HTTP statuses use the `identify` method on the  [`HttpStatusIdentifier`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/services/HttpStatusIdentifier.js) class.

The `identify` method expects either
1. an HTTP status code, represented as a `string` or a `number`
2. an HTTP status name, represented as a `string`

The returned [`HttpStatus`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/data/HttpStatus.js) object is wrapped in a Promise, and contains a `definition` field that is an [`HttpStatusDefinition`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/data/HttpStatusDefinition.js) object.

This `HttpStatusDefinition` object contains the following fields:
* `name`: A `string` which represents the name for the HTTP status
* `code`: A `number` which represents the code for the HTTP status
* `description`: A `string` that provides a brief overview of the HTTP status
* `supplementaryInformation`: A `string` that provides additional information for the HTTP status. This field may be empty where additional information is not necessary.
* `documentationUrl`: A `string` that represents the URL where official documentation for the HTTP status is found. This is often a URL to RFC documentation.

##### Example
```javascript
import { HttpStatusIdentifier } from 'http-status-identifier';

const httpStatusIdentifier = new HttpStatusIdentifier();

// Returns HttpStatus.OK, wrapped in a Promise
const okHttpStatus = httpStatusIdentifier.identify(200);

// Returns HttpStatus.IM_A_TEAPOT, wrapped in a Promise
const imATeapotHttpStatus = httpStatusIdentifier.identify("I'm a teapot");

// Returns HttpStatus.BAD_REQUEST, wrapped in a Promise
const badRequestHttpStatus = httpStatusIdentifier.identify('400');
```

#### HTTP Status Families

An [`HttpStatusFamily`](https://github.com/jaebradley/http-status-identifier/blob/master/src/data/HttpStatusFamily.js) is an [`Enum`](https://www.google.com/search?q=enumify&oq=enumify&aqs=chrome..69i57j0l2.4377j0j1&sourceid=chrome&ie=UTF-8#xxri=0) that contains a `statuses` field that is a list of all [`HttpStatus`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/data/HttpStatus.js) objects that are considered in that particular HTTP Status Family (all `SUCCESS` HTTP statuses, for example).

The [`HttpStatusFamilyIdentifer`](https://github.com/jaebradley/http-status-identifier/blob/master/src/services/HttpStatusFamilyIdentifier.js) has the following methods

* `identify(familyName)`
  * Returns the HTTP Status Family for the inputted status family name
* `identifyFamilyFromStatus(status)`
  * Returns the HTTP Status Family for the inputted HttpStatus object

##### Example
```javascript
import { HttpStatusFamilyIdentifer } from 'http-status-identifier';
import { HttpStatus } from 'http-status-identifier';

const httpStatusFamilyIdentifier = new HttpStatusFamilyIdentifer();

// Returns HttpStatusFamily.SUCCESS, wrapped in a Promise
const successFamily = httpStatusFamilyIdentifier.identify('sUcCesS');

// Returns HttpStatusFamily.SUCCESS, wrapped in a Promise
const successFamilyAgain = httpStatusIdentifier.identifyFamilyFromStatus(HttpStatus.OK);
```
