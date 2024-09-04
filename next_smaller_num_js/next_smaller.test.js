const nextSmaller = require('./next_smaller')

describe('nextSmaller', () => {
  it('returns 12', () => {
    expect(nextSmaller(21)).toBe(12)
  });

  it('returns 513', () => {
    expect(nextSmaller(531)).toBe(513)
  });

  it('returns 2017', () => {
    expect(nextSmaller(2071)).toBe(2017)
  });

  it('returns -1 for single digit num', () => {
    expect(nextSmaller(9)).toBe(-1)
  });

  it('handles three digit num with smallest combination', () => {
    expect(nextSmaller(135)).toBe(-1)
  });

  it('handles four digit num with smallest combination', () => {
    expect(nextSmaller(1027)).toBe(-1)
  });

  it('handles very large number', () => {
    expect(nextSmaller(59884848483559)).toBe(59884848459853)
  });
});
