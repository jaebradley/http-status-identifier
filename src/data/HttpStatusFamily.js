import { Enum } from 'enumify';
import { List, Map } from 'immutable';

import HttpStatus from './HttpStatus';

export default class HttpStatusFamily extends Enum {
  static getStatusFamilyMap() {
    const statusFamilyMap = {};
    HttpStatusFamily.enumValues.forEach((family) => {
      family.statuses.forEach((status) => {
        statusFamilyMap[status.name] = family;
      });
    });
    return Map(statusFamilyMap);
  }
}

HttpStatusFamily.initEnum({
  INFORMATIONAL: {
    statuses: List.of(
      HttpStatus.CONTINUE,
      HttpStatus.SWITCHING_PROTOCOLS,
      HttpStatus.PROCESSING,
    ),
  },
  SUCCESS: {
    statuses: List.of(
      HttpStatus.OK,
      HttpStatus.CREATED,
      HttpStatus.ACCEPTED,
      HttpStatus.NON_AUTHORITATIVE_INFORMATION,
      HttpStatus.NO_CONTENT,
      HttpStatus.RESET_CONTENT,
      HttpStatus.PARTIAL_CONTENT,
      HttpStatus.MULTI_STATUS,
      HttpStatus.ALREADY_REPORTED,
      HttpStatus.IM_USED,
    ),
  },
  REDIRECTION: {
    statuses: List.of(
      HttpStatus.MULTIPLE_CHOICES,
      HttpStatus.MOVED_PERMANENTLY,
      HttpStatus.FOUND,
      HttpStatus.SEE_OTHER,
      HttpStatus.NOT_MODIFIED,
      HttpStatus.USE_PROXY,
      HttpStatus.TEMPORARY_REDIRECT,
      HttpStatus.PERMANENT_REDIRECT,
    ),
  },
  CLIENT_ERROR: {
    statuses: List.of(
      HttpStatus.BAD_REQUEST,
      HttpStatus.UNAUTHORIZED,
      HttpStatus.PAYMENT_REQUIRED,
      HttpStatus.FORBIDDEN,
      HttpStatus.NOT_FOUND,
      HttpStatus.METHOD_NOT_ALLOWED,
      HttpStatus.NOT_ACCEPTABLE,
      HttpStatus.PROXY_AUTHENTICATION_REQUIRED,
      HttpStatus.REQUEST_TIMEOUT,
      HttpStatus.CONFLICT,
      HttpStatus.GONE,
      HttpStatus.LENGTH_REQUIRED,
      HttpStatus.PRECONDITION_FAILED,
      HttpStatus.PAYLOAD_TOO_LARGE,
      HttpStatus.REQUEST_URI_TOO_LONG,
      HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE,
      HttpStatus.EXPECTATION_FAILED,
      HttpStatus.IM_A_TEAPOT,
      HttpStatus.MISDIRECTED_REQUEST,
      HttpStatus.UNPROCESSABLE_ENTITY,
      HttpStatus.LOCKED,
      HttpStatus.FAILED_DEPENDENCY,
      HttpStatus.UPGRADE_REQUIRED,
      HttpStatus.PRECONDITION_REQUIRED,
      HttpStatus.TOO_MANY_REQUESTS,
      HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE,
      HttpStatus.CONNECTION_CLOSED_WITHOUT_RESPONSE,
      HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
      HttpStatus.CLIENT_CLOSED_REQUEST,
    ),
  },
  SERVER_ERROR: {
    statuses: List.of(
      HttpStatus.INTERNAL_SERVER_ERROR,
      HttpStatus.NOT_IMPLEMENTED,
      HttpStatus.BAD_GATEWAY,
      HttpStatus.SERVICE_UNAVAILABLE,
      HttpStatus.GATEWAY_TIMEOUT,
      HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
      HttpStatus.VARIANT_ALSO_NEGOTIATES,
      HttpStatus.INSUFFICIENT_STORAGE,
      HttpStatus.LOOP_DETECTED,
      HttpStatus.NOT_EXTENDED,
      HttpStatus.NETWORK_AUTHENTICATION_REQUIRED,
      HttpStatus.NETWORK_CONNECT_TIMEOUT_ERROR,
    ),
  },
});
