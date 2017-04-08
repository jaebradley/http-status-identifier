'use es6';

import { Enum } from 'enumify';
import { Map } from 'immutable';

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
         USE_PROXY as USE_PROXY_DESCRIPTION,
         TEMPORARY_REDIRECT as TEMPORARY_REDIRECT_DESCRIPTION,
         PERMANENT_REDIRECT as PERMANENT_REDIRECT_DESCRIPTION,
         BAD_REQUEST as BAD_REQUEST_DESCRIPTION,
         UNAUTHORIZED as UNAUTHORIZED_DESCRIPTION,
         PAYMENT_REQUIRED as PAYMENT_REQUIRED_DESCRIPTION,
         FORBIDDEN as FORBIDDEN_DESCRIPTION,
         NOT_FOUND as NOT_FOUND_DESCRIPTION,
         METHOD_NOT_ALLOWED as METHOD_NOT_ALLOWED_DESCRIPTION,
         NOT_ACCEPTABLE as NOT_ACCEPTABLE_DESCRIPTION,
         PROXY_AUTHENTICATION_REQUIRED as PROXY_AUTHENTICATION_REQUIRED_DESCRIPTION,
         REQUEST_TIMEOUT as REQUEST_TIMEOUT_DESCRIPTION,
         CONFLICT as CONFLICT_DESCRIPTION,
         GONE as GONE_DESCRIPTION,
         LENGTH_REQUIRED as LENGTH_REQUIRED_DESCRIPTION,
         PRECONDITION_FAILED as PRECONDITION_FAILED_DESCRIPTION,
         PAYLOAD_TOO_LARGE as PAYLOAD_TOO_LARGE_DESCRIPTION,
         REQUEST_URI_TOO_LONG as REQUEST_URI_TOO_LONG_DESCRIPTION,
         UNSUPPORTED_MEDIA_TYPE as UNSUPPORTED_MEDIA_TYPE_DESCRIPTION,
         REQUESTED_RANGE_NOT_SATISFIABLE as REQUESTED_RANGE_NOT_SATISFIABLE_DESCRIPTION,
         EXPECTATION_FAILED as EXPECTATION_FAILED_DESCRIPTION,
         IM_A_TEAPOT as IM_A_TEAPOT_DESCRIPTION,
         MISDIRECTED_REQUEST as MISDIRECTED_REQUEST_DESCRIPTION,
         UNPROCESSABLE_ENTITY as UNPROCESSABLE_ENTITY_DESCRIPTION,
         LOCKED as LOCKED_DESCRIPTION,
         FAILED_DEPENDENCY as FAILED_DEPENDENCY_DESCRIPTION,
         UPGRADE_REQUIRED as UPGRADE_REQUIRED_DESCRIPTION,
         PRECONDITION_REQUIRED as PRECONDITION_REQUIRED_DESCRIPTION,
         TOO_MANY_REQUESTS as TOO_MANY_REQUESTS_DESCRIPTION,
         REQUEST_HEADER_FIELDS_TOO_LARGE as REQUEST_HEADER_FIELDS_TOO_LARGE_DESCRIPTION,
         CONNECTION_CLOSED_WITHOUT_RESPONSE as CONNECTION_CLOSED_WITHOUT_RESPONSE_DESCRIPTION,
         UNAVAILABLE_FOR_LEGAL_REASONS as UNAVAILABLE_FOR_LEGAL_REASONS_DESCRIPTION,
         CLIENT_CLOSED_REQUEST as CLIENT_CLOSED_REQUEST_DESCRIPTION,
         INTERNAL_SERVER_ERROR as INTERNAL_SERVER_ERROR_DESCRIPTION,
         NOT_IMPLEMENTED as NOT_IMPLEMENTED_DESCRIPTION,
         BAD_GATEWAY as BAD_GATEWAY_DESCRIPTION,
         SERVICE_UNAVAILABLE as SERVICE_UNAVAILABLE_DESCRIPTION,
         GATEWAY_TIMEOUT as GATEWAY_TIMEOUT_DESCRIPTION,
         HTTP_VERSION_NOT_SUPPORTED as HTTP_VERSION_NOT_SUPPORTED_DESCRIPTION,
         VARIANT_ALSO_NEGOTIATES as VARIANT_ALSO_NEGOTIATES_DESCRIPTION,
         INSUFFICIENT_STORAGE as INSUFFICIENT_STORAGE_DESCRIPTION,
         LOOP_DETECTED as LOOP_DETECTED_DESCRIPTION,
         NOT_EXTENDED as NOT_EXTENDED_DESCRIPTION,
         NETWORK_AUTHENTICATION_REQUIRED as NETWORK_AUTHENTICATION_REQUIRED_DESCRIPTION,
         NETWORK_CONNECT_TIMEOUT_ERROR as NETWORK_CONNECT_TIMEOUT_ERROR_DESCRIPTION,
       } from '../constants/HttpStatusDescription';
import { CONTINUE as CONTINUE_SUPPLEMENTARY_INFORMATION,
         SWITCHING_PROTOCOLS as SWITCHING_PROTOCOLS_SUPPLEMENTARY_INFORMATION,
         PROCESSING as PROCESSING_SUPPLEMENTARY_INFORMATION,
         OK as OK_SUPPLEMENTARY_INFORMATION,
         CREATED as CREATED_SUPPLEMENTARY_INFORMATION,
         ACCEPTED as ACCEPTED_SUPPLEMENTARY_INFORMATION,
         NON_AUTHORITATIVE_INFORMATION as NON_AUTHORITATIVE_INFORMATION_SUPPLEMENTARY_INFORMATION,
         NO_CONTENT as NO_CONTENT_SUPPLEMENTARY_INFORMATION,
         RESET_CONTENT as RESET_CONTENT_SUPPLEMENTARY_INFORMATION,
         PARTIAL_CONTENT as PARTIAL_CONTENT_SUPPLEMENTARY_INFORMATION,
         MULTI_STATUS as MULTI_STATUS_SUPPLEMENTARY_INFORMATION,
         ALREADY_REPORTED as ALREADY_REPORTED_SUPPLEMENTARY_INFORMATION,
         IM_USED as IM_USED_SUPPLEMENTARY_INFORMATION,
         MULTIPLE_CHOICES as MULTIPLE_CHOICES_SUPPLEMENTARY_INFORMATION,
         MOVED_PERMANENTLY as MOVED_PERMANENTLY_SUPPLEMENTARY_INFORMATION,
         FOUND as FOUND_SUPPLEMENTARY_INFORMATION,
         SEE_OTHER as SEE_OTHER_SUPPLEMENTARY_INFORMATION,
         NOT_MODIFIED as NOT_MODIFIED_SUPPLEMENTARY_INFORMATION,
         USE_PROXY as USE_PROXY_SUPPLEMENTARY_INFORMATION,
         TEMPORARY_REDIRECT as TEMPORARY_REDIRECT_SUPPLEMENTARY_INFORMATION,
         PERMANENT_REDIRECT as PERMANENT_REDIRECT_SUPPLEMENTARY_INFORMATION,
         BAD_REQUEST as BAD_REQUEST_SUPPLEMENTARY_INFORMATION,
         UNAUTHORIZED as UNAUTHORIZED_SUPPLEMENTARY_INFORMATION,
         PAYMENT_REQUIRED as PAYMENT_REQUIRED_SUPPLEMENTARY_INFORMATION,
         FORBIDDEN as FORBIDDEN_SUPPLEMENTARY_INFORMATION,
         NOT_FOUND as NOT_FOUND_SUPPLEMENTARY_INFORMATION,
         METHOD_NOT_ALLOWED as METHOD_NOT_ALLOWED_SUPPLEMENTARY_INFORMATION,
         NOT_ACCEPTABLE as NOT_ACCEPTABLE_SUPPLEMENTARY_INFORMATION,
         PROXY_AUTHENTICATION_REQUIRED as PROXY_AUTHENTICATION_REQUIRED_SUPPLEMENTARY_INFORMATION,
         REQUEST_TIMEOUT as REQUEST_TIMEOUT_SUPPLEMENTARY_INFORMATION,
         CONFLICT as CONFLICT_SUPPLEMENTARY_INFORMATION,
         GONE as GONE_SUPPLEMENTARY_INFORMATION,
         LENGTH_REQUIRED as LENGTH_REQUIRED_SUPPLEMENTARY_INFORMATION,
         PRECONDITION_FAILED as PRECONDITION_FAILED_SUPPLEMENTARY_INFORMATION,
         PAYLOAD_TOO_LARGE as PAYLOAD_TOO_LARGE_SUPPLEMENTARY_INFORMATION,
         REQUEST_URI_TOO_LONG as REQUEST_URI_TOO_LONG_SUPPLEMENTARY_INFORMATION,
         UNSUPPORTED_MEDIA_TYPE as UNSUPPORTED_MEDIA_TYPE_SUPPLEMENTARY_INFORMATION,
         REQUESTED_RANGE_NOT_SATISFIABLE
         as REQUESTED_RANGE_NOT_SATISFIABLE_SUPPLEMENTARY_INFORMATION,
         EXPECTATION_FAILED as EXPECTATION_FAILED_SUPPLEMENTARY_INFORMATION,
         IM_A_TEAPOT as IM_A_TEAPOT_SUPPLEMENTARY_INFORMATION,
         MISDIRECTED_REQUEST as MISDIRECTED_REQUEST_SUPPLEMENTARY_INFORMATION,
         UNPROCESSABLE_ENTITY as UNPROCESSABLE_ENTITY_SUPPLEMENTARY_INFORMATION,
         LOCKED as LOCKED_SUPPLEMENTARY_INFORMATION,
         FAILED_DEPENDENCY as FAILED_DEPENDENCY_SUPPLEMENTARY_INFORMATION,
         UPGRADE_REQUIRED as UPGRADE_REQUIRED_SUPPLEMENTARY_INFORMATION,
         PRECONDITION_REQUIRED as PRECONDITION_REQUIRED_SUPPLEMENTARY_INFORMATION,
         TOO_MANY_REQUESTS as TOO_MANY_REQUESTS_SUPPLEMENTARY_INFORMATION,
         REQUEST_HEADER_FIELDS_TOO_LARGE
         as REQUEST_HEADER_FIELDS_TOO_LARGE_SUPPLEMENTARY_INFORMATION,
         CONNECTION_CLOSED_WITHOUT_RESPONSE
         as CONNECTION_CLOSED_WITHOUT_RESPONSE_SUPPLEMENTARY_INFORMATION,
         UNAVAILABLE_FOR_LEGAL_REASONS as UNAVAILABLE_FOR_LEGAL_REASONS_SUPPLEMENTARY_INFORMATION,
         CLIENT_CLOSED_REQUEST as CLIENT_CLOSED_REQUEST_SUPPLEMENTARY_INFORMATION,
         INTERNAL_SERVER_ERROR as INTERNAL_SERVER_ERROR_SUPPLEMENTARY_INFORMATION,
         NOT_IMPLEMENTED as NOT_IMPLEMENTED_SUPPLEMENTARY_INFORMATION,
         BAD_GATEWAY as BAD_GATEWAY_SUPPLEMENTARY_INFORMATION,
         SERVICE_UNAVAILABLE as SERVICE_UNAVAILABLE_SUPPLEMENTARY_INFORMATION,
         GATEWAY_TIMEOUT as GATEWAY_TIMEOUT_SUPPLEMENTARY_INFORMATION,
         HTTP_VERSION_NOT_SUPPORTED as HTTP_VERSION_NOT_SUPPORTED_SUPPLEMENTARY_INFORMATION,
         VARIANT_ALSO_NEGOTIATES as VARIANT_ALSO_NEGOTIATES_SUPPLEMENTARY_INFORMATION,
         INSUFFICIENT_STORAGE as INSUFFICIENT_STORAGE_SUPPLEMENTARY_INFORMATION,
         LOOP_DETECTED as LOOP_DETECTED_SUPPLEMENTARY_INFORMATION,
         NOT_EXTENDED as NOT_EXTENDED_SUPPLEMENTARY_INFORMATION,
         NETWORK_AUTHENTICATION_REQUIRED
         as NETWORK_AUTHENTICATION_REQUIRED_SUPPLEMENTARY_INFORMATION,
         NETWORK_CONNECT_TIMEOUT_ERROR as NETWORK_CONNECT_TIMEOUT_ERROR_SUPPLEMENTARY_INFORMATION,
       } from '../constants/HttpStatusSupplementaryInformation';
import HttpStatusDefinition from './HttpStatusDefinition';

// Sourced from https://httpstatuses.com/

export default class HttpStatus extends Enum {
  static getStatusCodeMap() {
    const statusCodeMap = {};
    HttpStatus.enumValues.forEach((status) => {
      statusCodeMap[status.definition.name.toUpperCase()] = status;
    });
    return Map(statusCodeMap);
  }

  static getStatusNameMap() {
    const statusNameMap = {};
    HttpStatus.enumValues.forEach((status) => {
      statusNameMap[status.definition.name.toUpperCase()] = status;
    });
    return Map(statusNameMap);
  }
}

HttpStatus.initEnum({
  // 1xx
  CONTINUE: {
    definition: new HttpStatusDefinition({
      name: 'Continue',
      code: 100,
      description: CONTINUE_DESCRIPTION,
      supplementaryInformation: CONTINUE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.2.1',
    }),
  },
  SWITCHING_PROTOCOLS: {
    definition: new HttpStatusDefinition({
      name: 'Switching Protocols',
      code: 101,
      description: SWITCHING_PROTOCOLS_DESCRIPTION,
      supplementaryInformation: SWITCHING_PROTOCOLS_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.2.2',
    }),
  },
  PROCESSING: {
    definition: new HttpStatusDefinition({
      name: 'Processing',
      code: 102,
      description: PROCESSING_DESCRIPTION,
      supplementaryInformation: PROCESSING_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'https://tools.ietf.org/html/rfc2518#section-10.1',
    }),
  },
  // 2xx

  OK: {
    definition: new HttpStatusDefinition({
      name: 'OK',
      code: 200,
      description: OK_DESCRIPTION,
      supplementaryInformation: OK_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.1',
    }),
  },
  CREATED: {
    definition: new HttpStatusDefinition({
      name: 'Created',
      code: 201,
      description: CREATED_DESCRIPTION,
      supplementaryInformation: CREATED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.2',
    }),
  },
  ACCEPTED: {
    definition: new HttpStatusDefinition({
      name: 'Accepted',
      code: 202,
      description: ACCEPTED_DESCRIPTION,
      supplementaryInformation: ACCEPTED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.3',
    }),
  },
  NON_AUTHORITATIVE_INFORMATION: {
    definition: new HttpStatusDefinition({
      name: 'Non-authoritative Information',
      code: 203,
      description: NON_AUTHORITATIVE_INFORMATION_DESCRIPTION,
      supplementaryInformation: NON_AUTHORITATIVE_INFORMATION_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.4',
    }),
  },
  NO_CONTENT: {
    definition: new HttpStatusDefinition({
      name: 'No Content',
      code: 204,
      description: NO_CONTENT_DESCRIPTION,
      supplementaryInformation: NO_CONTENT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.5',
    }),
  },
  RESET_CONTENT: {
    definition: new HttpStatusDefinition({
      name: 'Reset Content',
      code: 205,
      description: RESET_CONTENT_DESCRIPTION,
      supplementaryInformation: RESET_CONTENT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.3.6',
    }),
  },
  PARTIAL_CONTENT: {
    definition: new HttpStatusDefinition({
      name: 'Partial Content',
      code: 206,
      description: PARTIAL_CONTENT_DESCRIPTION,
      supplementaryInformation: PARTIAL_CONTENT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7233#section-4.1',
    }),
  },
  MULTI_STATUS: {
    definition: new HttpStatusDefinition({
      name: 'Multi-Status',
      code: 207,
      description: MULTI_STATUS_DESCRIPTION,
      supplementaryInformation: MULTI_STATUS_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-13',
    }),
  },
  ALREADY_REPORTED: {
    definition: new HttpStatusDefinition({
      name: 'Already Reported',
      code: 208,
      description: ALREADY_REPORTED_DESCRIPTION,
      supplementaryInformation: ALREADY_REPORTED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc5842#section-7.1',
    }),
  },
  IM_USED: {
    definition: new HttpStatusDefinition({
      name: 'IM Used',
      code: 226,
      description: IM_USED_DESCRIPTION,
      supplementaryInformation: IM_USED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc3229#section-10.4.1',
    }),
  },

  // 3xx

  MULTIPLE_CHOICES: {
    definition: new HttpStatusDefinition({
      name: 'Multiple Choices',
      code: 300,
      description: MULTIPLE_CHOICES_DESCRIPTION,
      supplementaryInformation: MULTIPLE_CHOICES_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.1',
    }),
  },
  MOVED_PERMANENTLY: {
    definition: new HttpStatusDefinition({
      name: 'Moved Permanently',
      code: 301,
      description: MOVED_PERMANENTLY_DESCRIPTION,
      supplementaryInformation: MOVED_PERMANENTLY_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.2',
    }),
  },
  FOUND: {
    definition: new HttpStatusDefinition({
      name: 'Found',
      code: 302,
      description: FOUND_DESCRIPTION,
      supplementaryInformation: FOUND_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.3',
    }),
  },
  SEE_OTHER: {
    definition: new HttpStatusDefinition({
      name: 'See Other',
      code: 303,
      description: SEE_OTHER_DESCRIPTION,
      supplementaryInformation: SEE_OTHER_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.4',
    }),
  },
  NOT_MODIFIED: {
    definition: new HttpStatusDefinition({
      name: 'Not Modified',
      code: 304,
      description: NOT_MODIFIED_DESCRIPTION,
      supplementaryInformation: NOT_MODIFIED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7232#section-4.1',
    }),
  },
  USE_PROXY: {
    definition: new HttpStatusDefinition({
      name: 'Use Proxy',
      code: 305,
      description: USE_PROXY_DESCRIPTION,
      supplementaryInformation: USE_PROXY_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.5',
    }),
  },
  TEMPORARY_REDIRECT: {
    definition: new HttpStatusDefinition({
      name: 'Temporary Redirect',
      code: 307,
      description: TEMPORARY_REDIRECT_DESCRIPTION,
      supplementaryInformation: TEMPORARY_REDIRECT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.4.7',
    }),
  },
  PERMANENT_REDIRECT: {
    definition: new HttpStatusDefinition({
      name: 'Permanent Redirect',
      code: 308,
      description: PERMANENT_REDIRECT_DESCRIPTION,
      supplementaryInformation: PERMANENT_REDIRECT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7538#section-3',
    }),
  },

  // 4xx

  BAD_REQUEST: {
    definition: new HttpStatusDefinition({
      name: 'Bad Request',
      code: 400,
      description: BAD_REQUEST_DESCRIPTION,
      supplementaryInformation: BAD_REQUEST_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.1',
    }),
  },
  UNAUTHORIZED: {
    definition: new HttpStatusDefinition({
      name: 'Unauthorized',
      code: 401,
      description: UNAUTHORIZED_DESCRIPTION,
      supplementaryInformation: UNAUTHORIZED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7235#section-3.1',
    }),
  },
  PAYMENT_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Payment Required',
      code: 402,
      description: PAYMENT_REQUIRED_DESCRIPTION,
      supplementaryInformation: PAYMENT_REQUIRED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.2',
    }),
  },
  FORBIDDEN: {
    definition: new HttpStatusDefinition({
      name: 'Forbidden',
      code: 403,
      description: FORBIDDEN_DESCRIPTION,
      supplementaryInformation: FORBIDDEN_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.3',
    }),
  },
  NOT_FOUND: {
    definition: new HttpStatusDefinition({
      name: 'Not Found',
      code: 404,
      description: NOT_FOUND_DESCRIPTION,
      supplementaryInformation: NOT_FOUND_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.4',
    }),
  },
  METHOD_NOT_ALLOWED: {
    definition: new HttpStatusDefinition({
      name: 'Method Not Allowed',
      code: 405,
      description: METHOD_NOT_ALLOWED_DESCRIPTION,
      supplementaryInformation: METHOD_NOT_ALLOWED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.5',
    }),
  },
  NOT_ACCEPTABLE: {
    definition: new HttpStatusDefinition({
      name: 'Not Acceptable',
      code: 406,
      description: NOT_ACCEPTABLE_DESCRIPTION,
      supplementaryInformation: NOT_ACCEPTABLE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.6',
    }),
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Proxy Authentication Required',
      code: 407,
      description: PROXY_AUTHENTICATION_REQUIRED_DESCRIPTION,
      supplementaryInformation: PROXY_AUTHENTICATION_REQUIRED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7235#section-3.2',
    }),
  },
  REQUEST_TIMEOUT: {
    definition: new HttpStatusDefinition({
      name: 'Request Timeout',
      code: 408,
      description: REQUEST_TIMEOUT_DESCRIPTION,
      supplementaryInformation: REQUEST_TIMEOUT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.7',
    }),
  },
  CONFLICT: {
    definition: new HttpStatusDefinition({
      name: 'Conflict',
      code: 409,
      description: CONFLICT_DESCRIPTION,
      supplementaryInformation: CONFLICT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.8',
    }),
  },
  GONE: {
    definition: new HttpStatusDefinition({
      name: 'Gone',
      code: 410,
      description: GONE_DESCRIPTION,
      supplementaryInformation: GONE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.9',
    }),
  },
  LENGTH_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Length Required',
      code: 411,
      description: LENGTH_REQUIRED_DESCRIPTION,
      supplementaryInformation: LENGTH_REQUIRED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.10',
    }),
  },
  PRECONDITION_FAILED: {
    definition: new HttpStatusDefinition({
      name: 'PreconditionFailed',
      code: 412,
      description: PRECONDITION_FAILED_DESCRIPTION,
      supplementaryInformation: PRECONDITION_FAILED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7232#section-4.2',
    }),
  },
  PAYLOAD_TOO_LARGE: {
    definition: new HttpStatusDefinition({
      name: 'Payload Too Large',
      code: 413,
      description: PAYLOAD_TOO_LARGE_DESCRIPTION,
      supplementaryInformation: PAYLOAD_TOO_LARGE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.11',
    }),
  },
  REQUEST_URI_TOO_LONG: {
    definition: new HttpStatusDefinition({
      name: 'Request-URI Too Long',
      code: 414,
      description: REQUEST_URI_TOO_LONG_DESCRIPTION,
      supplementaryInformation: REQUEST_URI_TOO_LONG_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.12',
    }),
  },
  UNSUPPORTED_MEDIA_TYPE: {
    definition: new HttpStatusDefinition({
      name: 'Unsupported Media Type',
      code: 415,
      description: UNSUPPORTED_MEDIA_TYPE_DESCRIPTION,
      supplementaryInformation: UNSUPPORTED_MEDIA_TYPE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.13',
    }),
  },
  REQUESTED_RANGE_NOT_SATISFIABLE: {
    definition: new HttpStatusDefinition({
      name: 'Requested Range Not Satisfiable',
      code: 416,
      description: REQUESTED_RANGE_NOT_SATISFIABLE_DESCRIPTION,
      supplementaryInformation: REQUESTED_RANGE_NOT_SATISFIABLE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7233#section-4.4',
    }),
  },
  EXPECTATION_FAILED: {
    definition: new HttpStatusDefinition({
      name: 'Expected Failed',
      code: 417,
      description: EXPECTATION_FAILED_DESCRIPTION,
      supplementaryInformation: EXPECTATION_FAILED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.14',
    }),
  },
  IM_A_TEAPOT: {
    definition: new HttpStatusDefinition({
      name: "I'm a teapot",
      code: 418,
      description: IM_A_TEAPOT_DESCRIPTION,
      supplementaryInformation: IM_A_TEAPOT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'https://tools.ietf.org/html/rfc2324#section-2.3.2',
    }),
  },
  MISDIRECTED_REQUEST: {
    definition: new HttpStatusDefinition({
      name: 'Misdirected Request',
      code: 421,
      description: MISDIRECTED_REQUEST_DESCRIPTION,
      supplementaryInformation: MISDIRECTED_REQUEST_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7540#section-9.1.2',
    }),
  },
  UNPROCESSABLE_ENTITY: {
    definition: new HttpStatusDefinition({
      name: 'Unprocessable Entity',
      code: 422,
      description: UNPROCESSABLE_ENTITY_DESCRIPTION,
      supplementaryInformation: UNPROCESSABLE_ENTITY_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.2',
    }),
  },
  LOCKED: {
    definition: new HttpStatusDefinition({
      name: 'Locked',
      code: 423,
      description: LOCKED_DESCRIPTION,
      supplementaryInformation: LOCKED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.3',
    }),
  },
  FAILED_DEPENDENCY: {
    definition: new HttpStatusDefinition({
      name: 'Failed Dependency',
      code: 424,
      description: FAILED_DEPENDENCY_DESCRIPTION,
      supplementaryInformation: FAILED_DEPENDENCY_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.4',
    }),
  },
  UPGRADE_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Upgrade Required',
      code: 426,
      description: UPGRADE_REQUIRED_DESCRIPTION,
      supplementaryInformation: UPGRADE_REQUIRED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.5.15',
    }),
  },
  PRECONDITION_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Precondition Required',
      code: 428,
      description: PRECONDITION_REQUIRED_DESCRIPTION,
      supplementaryInformation: PRECONDITION_REQUIRED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-3',
    }),
  },
  TOO_MANY_REQUESTS: {
    definition: new HttpStatusDefinition({
      name: 'Too Many Requests',
      code: 429,
      description: TOO_MANY_REQUESTS_DESCRIPTION,
      supplementaryInformation: TOO_MANY_REQUESTS_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-4',
    }),
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    definition: new HttpStatusDefinition({
      name: 'Request Header Fields Too Large',
      code: 431,
      description: REQUEST_HEADER_FIELDS_TOO_LARGE_DESCRIPTION,
      supplementaryInformation: REQUEST_HEADER_FIELDS_TOO_LARGE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-5',
    }),
  },
  CONNECTION_CLOSED_WITHOUT_RESPONSE: {
    definition: new HttpStatusDefinition({
      name: 'Connection Closed Without Response',
      code: 444,
      description: CONNECTION_CLOSED_WITHOUT_RESPONSE_DESCRIPTION,
      supplementaryInformation: CONNECTION_CLOSED_WITHOUT_RESPONSE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return',
    }),
  },
  UNAVAILABLE_FOR_LEGAL_REASONS: {
    definition: new HttpStatusDefinition({
      name: 'Unavailable For Legal Reasons',
      code: 451,
      description: UNAVAILABLE_FOR_LEGAL_REASONS_DESCRIPTION,
      supplementaryInformation: UNAVAILABLE_FOR_LEGAL_REASONS_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7725',
    }),
  },
  CLIENT_CLOSED_REQUEST: {
    definition: new HttpStatusDefinition({
      name: 'Client Closed Request',
      code: 499,
      description: CLIENT_CLOSED_REQUEST_DESCRIPTION,
      supplementaryInformation: CLIENT_CLOSED_REQUEST_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://lxr.nginx.org/source/src/http/ngx_http_request.h#0120',
    }),
  },

  // 5xx

  INTERNAL_SERVER_ERROR: {
    definition: new HttpStatusDefinition({
      name: 'Internal Server Error',
      code: 500,
      description: INTERNAL_SERVER_ERROR_DESCRIPTION,
      supplementaryInformation: INTERNAL_SERVER_ERROR_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.1',
    }),
  },
  NOT_IMPLEMENTED: {
    definition: new HttpStatusDefinition({
      name: 'Not Implemented',
      code: 501,
      description: NOT_IMPLEMENTED_DESCRIPTION,
      supplementaryInformation: NOT_IMPLEMENTED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.2',
    }),
  },
  BAD_GATEWAY: {
    definition: new HttpStatusDefinition({
      name: 'Bad Gateway',
      code: 502,
      description: BAD_GATEWAY_DESCRIPTION,
      supplementaryInformation: BAD_GATEWAY_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.3',
    }),
  },
  SERVICE_UNAVAILABLE: {
    definition: new HttpStatusDefinition({
      name: 'Service Unavailable',
      code: 503,
      description: SERVICE_UNAVAILABLE_DESCRIPTION,
      supplementaryInformation: SERVICE_UNAVAILABLE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.4',
    }),
  },
  GATEWAY_TIMEOUT: {
    definition: new HttpStatusDefinition({
      name: 'Gateway Timeout',
      code: 504,
      description: GATEWAY_TIMEOUT_DESCRIPTION,
      supplementaryInformation: GATEWAY_TIMEOUT_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.5',
    }),
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    definition: new HttpStatusDefinition({
      name: 'HTTP Version Not Supported',
      code: 505,
      description: HTTP_VERSION_NOT_SUPPORTED_DESCRIPTION,
      supplementaryInformation: HTTP_VERSION_NOT_SUPPORTED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc7231#section-6.6.6',
    }),
  },
  VARIANT_ALSO_NEGOTIATES: {
    definition: new HttpStatusDefinition({
      name: 'Variants Also Negotiates',
      code: 506,
      description: VARIANT_ALSO_NEGOTIATES_DESCRIPTION,
      supplementaryInformation: VARIANT_ALSO_NEGOTIATES_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc2295#section-8.1',
    }),
  },
  INSUFFICIENT_STORAGE: {
    definition: new HttpStatusDefinition({
      name: 'Insufficient Storage',
      code: 507,
      description: INSUFFICIENT_STORAGE_DESCRIPTION,
      supplementaryInformation: INSUFFICIENT_STORAGE_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc4918#section-11.5',
    }),
  },
  LOOP_DETECTED: {
    definition: new HttpStatusDefinition({
      name: 'Loop Detected',
      code: 508,
      description: LOOP_DETECTED_DESCRIPTION,
      supplementaryInformation: LOOP_DETECTED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc5842#section-7.2',
    }),
  },
  NOT_EXTENDED: {
    definition: new HttpStatusDefinition({
      name: 'Not Extended',
      code: 510,
      description: NOT_EXTENDED_DESCRIPTION,
      supplementaryInformation: NOT_EXTENDED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc2774#section-7',
    }),
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    definition: new HttpStatusDefinition({
      name: 'Network Authentication Required',
      code: 511,
      description: NETWORK_AUTHENTICATION_REQUIRED_DESCRIPTION,
      supplementaryInformation: NETWORK_AUTHENTICATION_REQUIRED_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'http://tools.ietf.org/html/rfc6585#section-6',
    }),
  },
  NETWORK_CONNECT_TIMEOUT_ERROR: {
    definition: new HttpStatusDefinition({
      name: 'Network Connect Timeout Error',
      code: 599,
      description: NETWORK_CONNECT_TIMEOUT_ERROR_DESCRIPTION,
      supplementaryInformation: NETWORK_CONNECT_TIMEOUT_ERROR_SUPPLEMENTARY_INFORMATION,
      documentationUrl: 'https://github.com/citricsquid/httpstatuses/issues/22',
    }),
  },
});
