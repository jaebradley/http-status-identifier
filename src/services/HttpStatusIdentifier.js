'use es6';

import HttpStatus from '../data/HttpStatus';

export default class HttpStatusIdentifier {
  constructor() {
    this.statusCodeMap = HttpStatus.getStatusCodeMap();
    this.statusNameMap = HttpStatus.getStatusNameMap();
  }

  identify(statusRepresentation) {
    // If the input is a number, try to return a definition for the number
    if (!isNaN(Number(statusRepresentation))) {
      return this.identifyStatusFromCode(Number(statusRepresentation));
    }

    // If the input is a string, assume the input is the status name
    if (typeof statusRepresentation === 'string') {
      return this.identifyStatusFromName(statusRepresentation);
    }

    // Else fail
    return new Promise((resolve, reject) => {
      reject({
        reason: `Unable to identify definition for: ${statusRepresentation}`,
      });
    });
  }

  identifyStatusFromName(statusName) {
    const definition = this.statusNameMap.get(statusName.toUpperCase());
    return new Promise((resolve, reject) => {
      if (definition) {
        resolve(definition);
      } else {
        reject({
          reason: `Unable to identify definition for status: ${statusName}`,
        });
      }
    });
  }

  identifyStatusFromCode(statusCode) {
    const definition = this.statusCodeMap.get(statusCode.toString());
    return new Promise((resolve, reject) => {
      if (definition) {
        resolve(definition);
      } else {
        reject({
          reason: `Unable to identify definition for status code: ${statusCode}`,
        });
      }
    });
  }
}