'use es6';

import { Record } from 'immutable';

const defaults = {
  name: '',
  code: 0,
  description: '',
  supplementaryInformation: '',
  rfcUrl: '',
};

export default class HttpStatusDefinition extends Record(defaults) {}
