'use es6';

// From https://httpstatuses.com/

export const CONTINUE = 'The initial part of a request has been received and has not yet been rejected by the server. The server intends to send a final response after the request has been fully received and acted upon.';

export const SWITCHING_PROTOCOLS = "The server understands and is willing to comply with the client's request; via the Upgrade header field; for a change in the application protocol being used on this connection.";

export const PROCESSING = 'An interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.';

export const OK = 'The request has succeeded.';

export const CREATED = 'The request has been fulfilled and has resulted in one or more new resources being created.';

export const ACCEPTED = 'The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.';

export const NON_AUTHORITATIVE_INFORMATION = "The request was successful but the enclosed payload has been modified from that of the origin server's 200 OK response by a transforming proxy.'";

export const NO_CONTENT = 'The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.';

export const RESET_CONTENT = 'The server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server.';

export const PARTIAL_CONTENT = "The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the request's Range header field.";

export const MULTI_STATUS = 'A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.';

export const ALREADY_REPORTED = 'Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.';

export const IM_USED = 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.';

export const MULTIPLE_CHOICES = 'The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.';

export const MOVED_PERMANENTLY = 'The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.';

export const FOUND = 'The target resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client ought to continue to use the effective request URI for future requests.';

export const SEE_OTHER = 'The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request.';

export const NOT_MODIFIED = 'A conditional GET or HEAD request has been received and would have resulted in a 200 OK response if it were not for the fact that the condition evaluated to false.';

export const USE_PROXY = 'Defined in a previous version of this specification and is now deprecated, due to security concerns regarding in-band configuration of a proxy.';

export const TEMPORARY_REDIRECT = 'The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.';

export const PERMANENT_REDIRECT = 'The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.';

export const BAD_REQUEST = 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).';

export const UNAUTHORIZED = 'The request has not been applied because it lacks valid authentication credentials for the target resource.';

export const PAYMENT_REQUIRED = 'Reserved for future use.';

export const FORBIDDEN = 'The server understood the request but refuses to authorize it.';

export const NOT_FOUND = 'The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.';

export const METHOD_NOT_ALLOWED = 'The method received in the request-line is known by the origin server but not supported by the target resource.';

export const NOT_ACCEPTABLE = 'The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.';

export const PROXY_AUTHENTICATION_REQUIRED = 'Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.';

export const REQUEST_TIMEOUT = 'The server did not receive a complete request message within the time that it was prepared to wait.';

export const CONFLICT = 'The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.';

export const GONE = 'The target resource is no longer available at the origin server and that this condition is likely to be permanent.';

export const LENGTH_REQUIRED = 'The server refuses to accept the request without a defined Content-Length.';

export const PRECONDITION_FAILED = 'One or more conditions given in the request header fields evaluated to false when tested on the server.';

export const PAYLOAD_TOO_LARGE = 'The server is refusing to process a request because the request payload is larger than the server is willing or able to process.';

export const REQUEST_URI_TOO_LONG = 'The server is refusing to service the request because the request-target is longer than the server is willing to interpret.';

export const UNSUPPORTED_MEDIA_TYPE = 'The origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.';

export const REQUESTED_RANGE_NOT_SATISFIABLE = "None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.";

export const EXPECTATION_FAILED = "The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.";

export const IM_A_TEAPOT = 'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.';

export const MISDIRECTED_REQUEST = 'The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.';

export const UNPROCESSABLE_ENTITY = 'The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions.';

export const LOCKED = 'The source or destination resource of a method is locked.';

export const FAILED_DEPENDENCY = 'The method could not be performed on the resource because the requested action depended on another action and that action failed.';

export const UPGRADE_REQUIRED = 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.';

export const PRECONDITION_REQUIRED = 'The origin server requires the request to be conditional.';

export const TOO_MANY_REQUESTS = 'The user has sent too many requests in a given amount of time ("rate limiting").';

export const REQUEST_HEADER_FIELDS_TOO_LARGE = 'The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.';

export const CONNECTION_CLOSED_WITHOUT_RESPONSE = 'A non-standard status code used to instruct nginx to close the connection without sending a response to the client, most commonly used to deny malicious or malformed requests.';

export const UNAVAILABLE_FOR_LEGAL_REASONS = 'The server is denying access to the resource as a consequence of a legal demand.';

export const CLIENT_CLOSED_REQUEST = 'A non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing the request.';

export const INTERNAL_SERVER_ERROR = 'The server encountered an unexpected condition that prevented it from fulfilling the request.';

export const NOT_IMPLEMENTED = 'The server does not support the functionality required to fulfill the request.';

export const BAD_GATEWAY = 'The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.';

export const SERVICE_UNAVAILABLE = 'The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.';

export const GATEWAY_TIMEOUT = 'The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.';

export const HTTP_VERSION_NOT_SUPPORTED = 'The server does not support, or refuses to support, the major version of HTTP that was used in the request message.';

export const VARIANT_ALSO_NEGOTIATES = 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.';

export const INSUFFICIENT_STORAGE = 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.';

export const LOOP_DETECTED = 'The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.';

export const NOT_EXTENDED = 'The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request.';

export const NETWORK_AUTHENTICATION_REQUIRED = 'The client needs to authenticate to gain network access.';

export const NETWORK_CONNECT_TIMEOUT_ERROR = 'This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.';
