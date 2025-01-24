const findDup = require('./find_duplicate');

describe('findDup', () => {
  it('returns 1', () => {
    expect(findDup([1, 1, 2, 3])).toBe(1)
  });

  it('returns 2', () => {
    expect(findDup([1, 2, 2, 3])).toBe(2)
  });

  it('returns 5', () => {
    expect(findDup([1, 3, 2, 5, 4, 5, 7, 6])).toBe(5)
  });

  it('returns 9', () => {
    expect(findDup([8, 2, 6, 3, 7, 9, 5, 1, 4, 9])).toBe(9)
  });
});
