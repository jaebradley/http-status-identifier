'use es6';

import { Enum } from 'enumify';

import HttpStatusDefinition from './HttpStatusDefinition';

// Sourced from https://httpstatuses.com/

export default class HttpStatus extends Enum {}

HttpStatus.initEnum({
  // 1xx
  CONTINUE: {
    definition: new HttpStatusDefinition({
      name: 'Continue',
      code: 100,
      description: 'The initial part of a request has been received and has not yet been rejected by the server. The server intends to send a final response after the request has been fully received and acted upon.',
      supplementaryInformation: 'When the request contains an Expect header field that includes a 100-continue expectation, the 100 response indicates that the server wishes to receive the request payload body1. The client ought to continue sending the request and discard the 100 response. If the request did not contain an Expect header field containing the 100-continue expectation, the client can simply discard this interim response.',
      rfcUrl: 'https://tools.ietf.org/html/rfc7231#section-5.1.1',
    }),
  },
});
