const solve = require('./remove_parenthesis')

describe('solve', () => {
  it('returns simple minus expression', () => {
    expect(solve('a-(b)')).toBe('a-b')
  });

  it('returns simple plus expression', () => {
    expect(solve('a+(b)')).toBe('a+b')
  });

  it('returns minus minus expression', () => {
    expect(solve('x-(y+z)')).toBe('x-y-z')
  });

  it('returns minus plus expression', () => {
    expect(solve('x-(y-z)')).toBe('x-y+z')
  });

  it('returns minus triple plus minus expression', () => {
    expect(solve('u-(v-w-(x+y))-z')).toBe('u-v+w+x+y-z')
  });

  it('handles double minus expression', () => {
    expect(solve('x-(-y-z)')).toBe('x+y+z')
  });

  it('handles plus minus expression', () => {
    expect(solve('a+(-b)')).toBe('a-b')
  });

  it('handles double minus at start', () => {
    expect(solve('-(-(x-y))')).toBe('x-y')
  });

  it('handles multiple parenthesis', () => {
    expect(solve('(((((((((-((-(((n))))))))))))))')).toBe('n')
  });

  it('returns alternate plus minus expression', () => {
    expect(solve('q+(s-(x-o))-(t-(w-a))')).toBe('q+s-x+o-t+w-a')
  });
});
