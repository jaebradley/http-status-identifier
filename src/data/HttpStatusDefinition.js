'use es6';

import { Record } from 'immutable';

const defaults = {
  name: '',
  code: 0,
  description: '',
  supplementaryInformation: '',
  documentationUrl: '',
};

export default class HttpStatusDefinition extends Record(defaults) {}
