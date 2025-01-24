const squareDigits = require('./squareDigits');

describe('squareDigits', () => {
  it('returns 4', () => {
    expect(squareDigits(2)).toBe(4);
  });

  it('returns 49', () => {
    expect(squareDigits(23)).toBe(49);
  });

  it('returns 811181', () => {
    expect(squareDigits(9119)).toBe(811181);
  });
});
