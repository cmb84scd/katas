const modpow = require('./power_modulo');

describe('modpow', () => {
  it('returns 3 from basic sum', () => {
    expect(modpow(2, 3, 5)).toBe(3)
  });

  it('returns 1 from basic sum', () => {
    expect(modpow(4, 12, 3)).toBe(1)
  });

  it('returns 1 from more complex sum', () => {
    expect(modpow(11, 10, 300)).toBe(1)
  });

  it('returns 32 from complex sum', () => {
    expect(modpow(11, 100000, 49)).toBe(32)
  });

  it('returns 5 from very complex sum', () => {
    expect(modpow(5, 100000000, 19)).toBe(5)
  });
});
