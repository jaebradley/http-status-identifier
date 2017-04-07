'use es6';

import { Enum } from 'enumify';

import { CONTINUE as CONTINUE_DESCRIPTION,
         SWITCHING_PROTOCOLS as SWITCHING_PROTOCOLS_DESCRIPTION,
         PROCESSING as PROCESSING_DESCRIPTION,
         OK as OK_DESCRIPTION,
         CREATED as CREATED_DESCRIPTION,
         ACCEPTED as ACCEPTED_DESCRIPTION,
         NON_AUTHORITATIVE_INFORMATION as NON_AUTHORITATIVE_INFORMATION_DESCRIPTION,
         NO_CONTENT as NO_CONTENT_DESCRIPTION,
         RESET_CONTENT as RESET_CONTENT_DESCRIPTION,
         PARTIAL_CONTENT as PARTIAL_CONTENT_DESCRIPTION,
         MULTI_STATUS as MULTI_STATUS_DESCRIPTION,
         ALREADY_REPORTED as ALREADY_REPORTED_DESCRIPTION,
         IM_USED as IM_USED_DESCRIPTION,
         MULTIPLE_CHOICES as MULTIPLE_CHOICES_DESCRIPTION,
         MOVED_PERMANENTLY as MOVED_PERMANENTLY_DESCRIPTION,
         FOUND as FOUND_DESCRIPTION,
         SEE_OTHER as SEE_OTHER_DESCRIPTION,
         NOT_MODIFIED as NOT_MODIFIED_DESCRIPTION,
         USE_PROXY as USE_PROXY_DESCRIPTION
       } from '../constants/HttpStatusDescription';
import { CONTINUE as CONTINUE_SUPPLEMENTARY_INFORMATION,
         SWITCHING_PROTOCOLS as SWITCHING_PROTOCOLS_SUPPLEMENTARY_INFORMATION,
         PROCESSING as PROCESSING_SUPPLEMENTARY_INFORMATION,
       } from '../constants/HttpStatusSupplementaryInformation';
import HttpStatusDefinition from './HttpStatusDefinition';

// Sourced from https://httpstatuses.com/

export default class HttpStatus extends Enum {}

HttpStatus.initEnum({
  // 1xx
  CONTINUE: {
    definition: new HttpStatusDefinition({
      name: 'Continue',
      code: 100,
      description: ContinueDescription,
      supplementaryInformation: ContinueSupplementaryInformation,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.2.1',
    }),
  },
  SWITCHING_PROTOCOLS: {
    definition: new HttpStatusDefinition({
      name: 'Switching Protocols',
      code: 101,
      description: SwitchingProtocolsDescription,
      supplementaryInformation: SwitchingProtocolsSupplementaryInformation,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.2.2',
    }),
  },
  PROCESSING: {
    definition: new HttpStatusDefinition({
      name: 'Processing',
      code: 102,
      description: ProcessingDescription,
      supplementaryInformation: ProcessingSupplementaryInformation,
      documentationUrl: 'https://tools.ietf.org/html/rfc2518#section-10.1',
    }),
  },
  // 2xx

  OK: {
    definition: new HttpStatusDefinition({
      name: 'OK',
      code: 200,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    })
  },
  CREATED: {
    definition: new HttpStatusDefinition({
      name: 'Created',
      code: 201,
      description:,
      supplementaryInformation:
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    })
  },
  ACCEPTED: {
    definition: new HttpStatusDefinition({
      name: 'Accepted',
      code: 202,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    })
  },
  NON_AUTHORITATIVE_INFORMATION: {
    definition: new HttpStatusDefinition({
      name: 'Non-authoritative Information',
      code: 203,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    })
  },
  NO_CONTENT: {
    definition: new HttpStatusDefinition({
      name: 'No Content',
      code: 204,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    })
  },
  RESET_CONTENT: {
    definition: new HttpStatusDefinition({
      name: 'Reset Content',
      code: 205,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    })
  },
  PARTIAL_CONTENT: {
    definition: new HttpStatusDefinition({
      name: 'Partial Content',
      code: 206,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7233#section-4.1'
    })
  },
  MULTI_STATUS: {
    definition: new HttpStatusDefinition({
      name: 'Multi-Status',
      code: 207,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-13'
    })
  },
  ALREADY_REPORTED: {
    definition: new HttpStatusDefinition({
      name: 'Already Reported',
      code: 208,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc5842#section-7.1'
    })
  },
  IM_USED: {
    definition: new HttpStatusDefinition({
      name: 'IM Used',
      code: 226,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    })
  },

  // 3xx

  MULTIPLE_CHOICES: {
    definition: new HttpStatusDefinition({
      name: 'Multiple Choices',
      code: 300,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    })
  },
  MOVED_PERMANENTLY: {
    definition: new HttpStatusDefinition({
      name: 'Moved Permanently',
      code: 301,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    })
  },
  FOUND: {
    definition: new HttpStatusDefinition({
      name: 'Found',
      code: 302,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    })
  },
  SEE_OTHER: {
    definition: new HttpStatusDefinition({
      name: 'See Other',
      code: 303,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    })
  },
  NOT_MODIFIED: {
    definition: new HttpStatusDefinition({
      name: 'Not Modified',
      code: 304,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7232#section-4.1'
    })
  },
  USE_PROXY: {
    definition: new HttpStatusDefinition({
      name: 'Use Proxy',
      code: 305,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    })
  },
  TEMPORARY_REDIRECT: {
    definition: new HttpStatusDefinition({
      name: 'Temporary Redirect',
      code: 307,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    })
  },
  PERMANENT_REDIRECT: {
    definition: new HttpStatusDefinition({
      name: 'Permanent Redirect',
      code: 308,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7538#section-3'
    })
  },

  // 4xx

  BAD_REQUEST: {
    definition: new HttpStatusDefinition({
      name: 'Bad Request',
      code: 400,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    })
  },
  UNAUTHORIZED: {
    definition: new HttpStatusDefinition({
      name: 'Unauthorized',
      code: 401,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7235#section-3.1'
    })
  },
  PAYMENT_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Payment Required',
      code: 402,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    })
  },
  FORBIDDEN: {
    definition: new HttpStatusDefinition({
      name: 'Forbidden',
      code: 403,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    })
  },
  NOT_FOUND: {
    definition: new HttpStatusDefinition({
      name: 'Not Found',
      code: 404,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    })
  },
  METHOD_NOT_ALLOWED: {
    definition: new HttpStatusDefinition({
      name: 'Method Not Allowed',
      code: 405,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    })
  },
  NOT_ACCEPTABLE: {
    definition: new HttpStatusDefinition({
      name: 'Not Acceptable',
      code: 406,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    })
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Proxy Authentication Required',
      code: 407,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7235#section-3.2'
    })
  },
  REQUEST_TIMEOUT: {
    definition: new HttpStatusDefinition({
      name: 'Request Timeout',
      code: 408,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    })
  },
  CONFLICT: {
    definition: new HttpStatusDefinition({
      name: 'Conflict',
      code: 409,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    })
  },
  GONE: {
    definition: new HttpStatusDefinition({
      name: 'Gone',
      code: 410,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    })
  },
  LENGTH_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Length Required',
      code: 411,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    })
  },
  PRECONDITION_FAILED: {
    definition: new HttpStatusDefinition({
      name: 'PreconditionFailed',
      code: 412,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7232#section-4.2'
    })
  },
  PAYLOAD_TOO_LARGE: {
    definition: new HttpStatusDefinition({
      name: 'Payload Too Large',
      code: 413,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    })
  },
  REQUEST_URI_TOO_LONG: {
    definition: new HttpStatusDefinition({
      name: 'Request-URI Too Long',
      code: 414,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    })
  },
  UNSUPPORTED_MEDIA_TYPE: {
    definition: new HttpStatusDefinition({
      name: 'Unsupported Media Type',
      code: 415,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    })
  },
  REQUESTED_RANGE_NOT_SATISFIABLE: {
    definition: new HttpStatusDefinition({
      name: 'Requested Range Not Satisfiable',
      code: 416,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7233#section-4.4'
    })
  },
  EXPECTATION_FAILED: {
    definition: new HttpStatusDefinition({
      name: 'Expected Failed',
      code: 417,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    })
  },
  IM_A_TEAPOT: {
    definition: new HttpStatusDefinition({
      name: "I'm a teapot",
      code: 418,
      description:,
      supplementaryInformation:,
      documentationUrl: 'https://tools.ietf.org/html/rfc2324#section-2.3.2'
    })
  },
  MISDIRECTED_REQUEST: {
    definition: new HttpStatusDefinition({
      name: 'Misdirected Request',
      code: 421,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7540#section-9.1.2'
    })
  },
  UNPROCESSABLE_ENTITY: {
    definition: new HttpStatusDefinition({
      name: 'Unprocessable Entity',
      code: 422,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.2'
    })
  },
  LOCKED: {
    definition: new HttpStatusDefinition({
      name: 'Locked',
      code: 423,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.3'
    })
  },
  FAILED_DEPENDENCY: {
    definition: new HttpStatusDefinition({
      name: 'Failed Dependency',
      code: 424,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.4'
    })
  },
  UPGRADE_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Upgrade Required',
      code: 426,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    })
  },
  PRECONDITION_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Precondition Required',
      code: 428,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-3'
    })
  },
  TOO_MANY_REQUESTS: {
    definition: new HttpStatusDefinition({
      name: 'Too Many Requests',
      code: 429,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-4'
    })
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    definition: new HttpStatusDefinition({
      name: 'Request Header Fields Too Large',
      code: 431,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-5'
    })
  },
  CONNECTION_CLOSED_WITHOUT_RESPONSE: {
    definition: new HttpStatusDefinition({
      name: 'Connection Closed Without Response',
      code: 444,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return'
    })
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    definition: new HttpStatusDefinition({
      name: 'Unavailable For Legal Reasons',
      code: 451,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7725'
    })
  },
  CLIENT_CLOSED_REQUEST: {
    definition: new HttpStatusDefinition({
      name: 'Client Closed Request',
      code: 499,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://lxr.nginx.org/source/src/http/ngx_http_request.h#0120'
    })
  },

  // 5xx

  INTERNAL_SERVER_ERROR: {
    definition: new HttpStatusDefinition({
      name: 'Internal Server Error',
      code: 500,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    })
  },
  NOT_IMPLEMENTED: {
    definition: new HttpStatusDefinition({
      name: 'Not Implemented',
      code: 501,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    })
  },
  BAD_GATEWAY: {
    definition: new HttpStatusDefinition({
      name: 'Bad Gateway',
      code: 502,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    })
  },
  SERVICE_UNAVAILABLE: {
    definition: new HttpStatusDefinition({
      name: 'Service Unavailable',
      code: 503,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    })
  },
  GATEWAY_TIMEOUT: {
    definition: new HttpStatusDefinition({
      name: 'Gateway Timeout',
      code: 504,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    })
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    definition: new HttpStatusDefinition({
      name: 'HTTP Version Not Supported',
      code: 505,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    })
  },
  VARIANT_ALSO_NEGOTIATES: {
    definition: new HttpStatusDefinition({
      name: 'Variants Also Negotiates',
      code: 506,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc2295#section-8.1'
    })
  },
  INSUFFICIENT_STORAGE: {
    definition: new HttpStatusDefinition({
      name: 'Insufficient Storage',
      code: 507,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.5'
    })
  },
  LOOP_DETECTED: {
    definition: new HttpStatusDefinition({
      name: 'Loop Detected',
      code: 508,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc5842#section-7.2'
    })
  },
  NOT_EXTENDED: {
    definition: new HttpStatusDefinition({
      name: 'Not Extended',
      code: 510,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc2774#section-7'
    })
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Network Authentication Required',
      code: 511,
      description:,
      supplementaryInformation:,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-6'
    })
  },
  NETWORK_CONNECT_TIMEOUT_ERROR: {
    definition: new HttpStatusDefinition({
      name: 'Network Connect Timeout Error',
      code: 599,
      description:,
      supplementaryInformation:,
      documentationUrl: 'https://github.com/citricsquid/httpstatuses/issues/22'
    })
  },
});
