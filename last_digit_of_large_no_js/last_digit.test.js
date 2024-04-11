const lastDigit = require('./last_digit');

describe('lastDigit', () => {
  it('returns 4 from simple calc', () => {
    expect(lastDigit(4n, 1n)).toBe(4n)
  });

  it('returns 6 from simple calc', () => {
    expect(lastDigit(4n, 2n)).toBe(6n)
  });

  it('returns 9 from more complex calc', () => {
    expect(lastDigit(9n, 7n)).toBe(9n)
  });

  it('returns 0 from complex calc', () => {
    expect(lastDigit(10n, 10000000000n)).toBe(0n)
  });

  it('returns 6 from very complex calc', () => {
    expect(lastDigit(1606938044258990275541962092341162602522202993782792835301376n, 2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n)).toBe(6n)
  });

  it('returns 1 when second number is 0', () => {
    expect(lastDigit(0n, 0n)).toBe(1n)
  });

  it('returns 7 from very complex calc', () => {
    expect(lastDigit(3715290469715693021198967285016729344580685479654510946723n, 68819615221552997273737174557165657483427362207517952651n)).toBe(7n)
  });
});
