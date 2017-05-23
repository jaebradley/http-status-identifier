/* eslint-disable arrow-body-style */

'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import HttpStatusFamilyIdentifier from '../../src/services/HttpStatusFamilyIdentifier';
import HttpStatus from '../../src/data/HttpStatus';
import HttpStatusFamily from '../../src/data/HttpStatusFamily';

chai.use(chaiImmutable);
chai.use(sinonChai);
chai.use(chaiAsPromised);

const expect = chai.expect;

describe('description', () => {
  const identifier = new HttpStatusFamilyIdentifier();
  describe('identify family from name', () => {
    it('rejects', () => {
      return expect(identifier.identify('adsfljkasdf')).to.eventually.be.rejected;
    });

    it('resolves', () => {
      return expect(identifier.identify('INFormaTionAl'))
              .to.become(HttpStatusFamily.INFORMATIONAL);
    });
  });

  describe('identify family from status', () => {
    it('rejects', () => {
      return expect(identifier.identifyFamilyFromStatus('faosidflkj')).to.eventually.be.rejected;
    });

    it('resolves', () => {
      return expect(identifier.identifyFamilyFromStatus(HttpStatus.OK)).to.become(HttpStatusFamily.SUCCESS);
    });
  });
});
