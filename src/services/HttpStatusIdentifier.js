/* global isNaN */
/* eslint no-restricted-globals: ["off", "isNaN"] */

import {
  HttpStatusCodeToStatus,
  HttpStatusNameToStatus,
} from '../data/HttpStatus';

const identify = (statusRepresentation) => {
  let status;

  if (!isNaN(Number(statusRepresentation))) {
    // If the input is a number, try to return a definition for the number
    status = HttpStatusCodeToStatus[(Number(statusRepresentation))];
  } else if (typeof statusRepresentation === 'string') {
    // If the input is a string, assume the input is the status name
    status = HttpStatusNameToStatus[(statusRepresentation.toUpperCase())];
  }

  if (!status) {
    throw new Error(`Unable to identify definition for: ${statusRepresentation}`);
  }

  return status;
};

export default identify;
