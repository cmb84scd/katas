const score = require('./score');

describe('score', () => {
  it('returns two hundred and fifty', () => {
    expect(score([5, 1, 3, 4, 1])).toBe(250)
  });

  it('returns one thousand, one hundred', () => {
    expect(score([1, 1, 1, 3, 1])).toBe(1100)
  });

  it('returns zero when no rules are matched', () => {
    expect(score([2, 3, 4, 6, 2])).toBe(0)
  });

  it('returns four hundred', () => {
    expect(score([4, 4, 4, 3, 3])).toBe(400)
  });

  it('returns four hundred and fifty', () => {
    expect(score([2, 4, 4, 5, 4])).toBe(450)
  });
});
