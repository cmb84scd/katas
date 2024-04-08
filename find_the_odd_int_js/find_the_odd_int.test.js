const findOdd = require('./find_the_odd_int');

describe('findOdd', () => {
  it('returns seven', () => {
    expect(findOdd([7])).toBe(7)
  });

  it('returns zero', () => {
    expect(findOdd([0])).toBe(0)
  });

  it('returns two', () => {
    expect(findOdd([1, 1, 2])).toBe(2)
  });

  it('returns zero from longer array', () => {
    expect(findOdd([0, 1, 0, 1, 0])).toBe(0)
  });

  it('returns four', () => {
    expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4)
  });
});
