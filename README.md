# HTTP Status Identifier

### Purpose
A simple Node JS client that returns an HTTP Status given either a status code (i.e `200`) or the status name (i.e `I'm a teapot`).

### Installation
Install via [NPM](https://www.npmjs.com/package/http-status-identifier).
```
npm install http-status-identifier
```

### Usage

#### Example
```javascript
import { HttpStatusIdentifier } from 'http-status-identifier';

const httpStatusIdentifier = new HttpStatusIdentifier();

// Returns HttpStatus.OK
const okHttpStatus = httpStatusIdentifier.identify(200);

// Returns HttpStatus.IM_A_TEAPOT
const imATeapotHttpStatus = httpStatusIdentifier.identify("I'm a teapot");

// Returns HttpStatus.BAD_REQUEST
const badRequestHttpStatus = httpStatusIdentifier.identify('400');
```

#### API
To retrieve HTTP statuses use the `identify` method on the  [`HttpStatusIdentifier`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/services/HttpStatusIdentifier.js) class.

The `identify` method expects either
1. an HTTP status code, represented as a `string` or a `number`
2. an HTTP status name, represented as a `string`

The returned [`HttpStatus`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/data/HttpStatus.js) object contains a `definition` field that is an [`HttpStatusDefinition`](https://github.com/jaebradley/http-status-code-definition-identifier/blob/master/src/data/HttpStatusDefinition.js) object.

This `HttpStatusDefinition` object contains
* `name`: A `string` which represents the name for the HTTP status
* `code`: A `number` which represents the code for the HTTP status
* `description`: A `string` that provides a brief overview of the HTTP status
* `supplementaryInformation`: A `string` that provides additional information for the HTTP status. This field may be empty where additional information is not necessary.
* `documentationUrl`: A `string` that represents the URL where official documentation for the HTTP status is found. This is often a URL to RFC documentation.
