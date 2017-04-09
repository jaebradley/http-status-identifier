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
      return expect(identifier.identifyDefinitionFromStatusCode(1)).to.eventually.be.rejected;
    });

    it('resolves', () => {
      return expect(identifier.identifyDefinitionFromStatusCode(100))
              .to.become(HttpStatus.CONTINUE);
    });
  });

  describe('identify definition from status name', () => {
    it('rejects', () => {
      return expect(identifier.identifyDefinitionFromStatusName('foo')).to.eventually.be.rejected;
    });

    it('resolves', () => {
      return expect(identifier.identifyDefinitionFromStatusName('Continue')).to.become(HttpStatus.CONTINUE);
    });
  });

  describe('identify definition', () => {
    it('returns status for number', () => {
      return expect(identifier.identifyDefinition('100')).to.become(HttpStatus.CONTINUE);
    });

    it('returns status for name', () => {
      expect(identifier.identifyDefinition('Continue')).to.become(HttpStatus.CONTINUE);
    });

    it('returns rejected Promise', () => {
      return expect(identifier.identifyDefinition(undefined)).to.eventually.be.rejected;
    });
  });
});
