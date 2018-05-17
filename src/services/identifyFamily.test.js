import identifyFamily from './identifyFamily';

describe('identifyFamily', () => {
  it('can identify family for status code 200', () => {
    expect(identifyFamily(200)).toBe('SUCCESS');
  });

  it('can identify family for status code "200"', () => {
    expect(identifyFamily('200')).toBe('SUCCESS');
  });

  it('can identify family for status code "ok"', () => {
    expect(identifyFamily('ok')).toBe('SUCCESS');
  });

  it('cannot identify family for status code "foo"', () => {
    expect(() => identifyFamily('foo')).toThrow(/^Unable to identify family for: foo$/);
  });

  it('cannot identify family for status code 1', () => {
    expect(() => identifyFamily(1)).toThrow(/^Unable to identify family for: 1$/);
  });
});
