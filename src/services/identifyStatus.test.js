import identifyStatus from './identifyStatus';
import { HttpStatus } from '../data/HttpStatus';

describe('identifyStatus', () => {
  describe('identify definition from status code', () => {
    it('cannot identify status code 1', () => {
      expect(() => identifyStatus(1)).toThrow(/^Unable to identify definition for: 1$/);
    });

    it('can identify status code 100', () => {
      expect(identifyStatus(100)).toEqual(HttpStatus.CONTINUE);
    });

    it('can identify string status code', () => {
      expect(identifyStatus('100')).toEqual(HttpStatus.CONTINUE);
    });
  });

  describe('identify definition from status name', () => {
    it('cannot identify status name foo', () => {
      expect(() => identifyStatus('foo')).toThrow(/^Unable to identify definition for: foo$/);
    });

    it('can identify status name Continue', () => {
      expect(identifyStatus('Continue')).toEqual(HttpStatus.CONTINUE);
    });
  });
});
