const solve = require('./reversed_parenthesis');

describe('solve', () => {
  it('returns -1', () => {
    expect(solve('(((')).toBe(-1)
  });

  it('returns 2', () => {
    expect(solve(')(')).toBe(2)
  });

  it('returns 1', () => {
    expect(solve('(((())')).toBe(1)
  });

  it('returns 3', () => {
    expect(solve('())(((')).toBe(3)
  });

  it('returns 4', () => {
    expect(solve('())()))))()()(')).toBe(4)
  })
});
