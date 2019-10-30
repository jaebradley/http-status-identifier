import {
  HttpStatusCodeToStatus,
  HttpStatusNameToStatus,
} from '../data/HttpStatus';

const identifyStatus = (statusRepresentation) => {
  let status;

  if (!Number.isNaN(Number(statusRepresentation))) {
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

export default identifyStatus;
