const digitwiseAddition = require('./digitwise_addition');

describe('digitwiseAddition', () => {
  it('returns six', () => {
    expect(digitwiseAddition(9812, 2)).toBe(6)
  });

  it('returns eight', () => {
    expect(digitwiseAddition(9899, 3)).toBe(8)
  });

  it('returns 720819522', () => {
    expect(digitwiseAddition(967085879, 90064)).toBe(720819522)
  });
});
