'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import HttpStatusCodeDefinitionIdentifier from '../../src/services/HttpStatusCodeDefinitionIdentifier';

chai.use(chaiImmutable);
chai.use(sinonChai);

const expect = chai.expect;

describe('description', () => {
  const identifier = new HttpStatusCodeDefinitionIdentifier();
  describe('identify definition from status code', () => {
    it('rejects', () => {
      const statusCodeDefiner = sinon.stub(identifier, 'statusCodeMap').returns({ get: undefined });
      expect(identifier.identifyDefinitionFromStatusCode(1)).to.eql(Promise.reject('Unable to identify definition for status code: 1'));
      statusCodeDefiner.restore();
    });

    it('resolves', () => {
      const statusCodeDefiner = sinon.stub(identifier, 'statusCodeMap').returns({ get: true });
      expect(identifier.identifyDefinitionFromStatusCode(1)).to.eql(Promise.resolve(true));
      statusCodeDefiner.restore();
    });
  });

  describe('identify definition from status name', () => {
    it('rejects', () => {
      const statusNameDefiner = sinon.stub(identifier, 'statusNameMap').returns({
        get: undefined });
      expect(identifier.identifyDefinitionFromStatusName('foo')).to.eql(Promise.reject('Unable to identify definition for status code: foo'));
      statusNameDefiner.restore();
    });

    it('resolves', () => {
      const statusNameDefiner = sinon.stub(identifier, 'statusNameMap').returns({ get: true });
      expect(identifier.identifyDefinitionFromStatusName('foo')).to.eql(Promise.resolve(true));
      statusNameDefiner.restore();
    });
  });

  describe('identify definition', () => {
    it('returns status for number', () => {
      const statusCodeIdentifier = sinon.stub(identifier, 'identifyDefinitionFromStatusCode').returns('jaebaebae');
      expect(identifier.identifyDefinition('1')).to.eql('jaebaebae');
      statusCodeIdentifier.restore();
    });

    it('returns status for name', () => {
      const statusNameIdentifier = sinon.stub(identifier, 'identifyDefinitionFromStatusName').returns('jaebaebae');
      expect(identifier.identifyDefinition('foo')).to.eql('jaebaebae');
      statusNameIdentifier.restore();
    });

    it('returns rejected Promise', () => {
      expect(identifier.identifyDefinition(undefined)).to.eql(Promise.reject('Unable to identify definition for: undefined'));
    });
  });
});
