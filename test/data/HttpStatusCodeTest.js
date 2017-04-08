'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import HttpStatus from '../../src/data/HttpStatus';

chai.use(chaiImmutable);

const expect = chai.expect;

describe('HTTP Status Code', () => {
  it('checks status code value', () => {
    expect(HttpStatus.CONTINUE.code).to.eql(100);
  });
});
