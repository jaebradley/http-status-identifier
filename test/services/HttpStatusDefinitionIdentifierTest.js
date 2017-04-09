/* eslint-disable arrow-body-style */

'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import HttpStatusIdentifier from '../../src/services/HttpStatusIdentifier';
import HttpStatus from '../../src/data/HttpStatus';

chai.use(chaiImmutable);
chai.use(sinonChai);
chai.use(chaiAsPromised);

const expect = chai.expect;

describe('description', () => {
  const identifier = new HttpStatusIdentifier();
  describe('identify definition from status code', () => {
    it('rejects', () => {
      return expect(identifier.identifyStatusFromCode(1)).to.eventually.be.rejected;
    });

    it('resolves', () => {
      return expect(identifier.identifyStatusFromCode(100))
              .to.become(HttpStatus.CONTINUE);
    });
  });

  describe('identify definition from status name', () => {
    it('rejects', () => {
      return expect(identifier.identifyStatusFromName('foo')).to.eventually.be.rejected;
    });

    it('resolves', () => {
      return expect(identifier.identifyStatusFromName('Continue')).to.become(HttpStatus.CONTINUE);
    });
  });

  describe('identify definition', () => {
    it('returns status for number', () => {
      return expect(identifier.identify('100')).to.become(HttpStatus.CONTINUE);
    });

    it('returns status for name', () => {
      return expect(identifier.identify('Continue')).to.become(HttpStatus.CONTINUE);
    });

    it('returns rejected Promise', () => {
      return expect(identifier.identify(undefined)).to.eventually.be.rejected;
    });
  });
});
