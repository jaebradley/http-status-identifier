import {
  HttpStatusCodesToFamily,
  HttpStatusNamesToFamily,
} from '../data/HttpStatusFamily';

const identifyFamily = (statusRepresentation) => {
  let family;

  if (!Number.isNaN(Number(statusRepresentation))) {
    // If the input is a number, try to return a definition for the number
    family = HttpStatusCodesToFamily[(Number(statusRepresentation))];
  } else if (typeof statusRepresentation === 'string') {
    // If the input is a string, assume the input is the status name
    family = HttpStatusNamesToFamily[(statusRepresentation.toUpperCase())];
  }

  if (!family) {
    throw new Error(`Unable to identify family for: ${statusRepresentation}`);
  }

  return family.name;
};

export default identifyFamily;
