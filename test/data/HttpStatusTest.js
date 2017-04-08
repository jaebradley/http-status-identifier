'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import HttpStatus from '../../src/data/HttpStatus';

chai.use(chaiImmutable);

const expect = chai.expect;

describe('HTTP Status Code', () => {
  it('checks status code map', () => {
    const statusCodeMap = HttpStatus.getStatusCodeMap();

    expect(statusCodeMap.size).to.equal(63);

    statusCodeMap.entrySeq().forEach((entry) => {
      const code = entry[0];
      const expected = entry[1];
      let actual = 'foo';
      HttpStatus.enumValues.forEach((status) => {
        if (parseInt(code, 10) === status.definition.code) {
          actual = status;
        }
      });
      expect(expected).to.eql(actual, `Expected ${expected} to equal ${actual}`);
    });
  });

  it('checks status name map', () => {
    const statusNameMap = HttpStatus.getStatusNameMap();

    expect(statusNameMap.size).to.equal(63);

    statusNameMap.entrySeq().forEach((entry) => {
      const name = entry[0];
      const expected = entry[1];
      let actual = -1;
      HttpStatus.enumValues.forEach((status) => {
        if (name === status.definition.name.toUpperCase()) {
          actual = status;
        }
      });
      expect(expected).to.eql(actual);
    });
  });
});
