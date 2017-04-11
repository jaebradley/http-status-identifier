# HTTP Status Identifier

### Purpose
A simple Node JS client that returns an HTTP Status given either a status code (i.e `200`) or the status name (i.e `I'm a teapot`).

### Installation
```
npm install http-status-identifier
```

### Usage

#### Example
```js
import { HttpStatusIdentifier } from 'http-status-identifier';

const httpStatusIdentifier = new HttpStatusIdentifier();

// Returns HttpStatus.OK
const okHttpStatus = httpStatusIdentifier.identify(200);

// Returns HttpStatus.IM_A_TEAPOT
const imATeapotHttpStatus = httpStatusIdentifier.identify("I'm a teapot");

// Returns HttpStatus.BAD_REQUEST
const badRequestHttpStatus = httpStatusIdentifier.identify('400');
```
