const humanReadable = require('./readable_time');

describe('humanReadable', () => {

  it('returns zero seconds', () => {
    expect(humanReadable(0)).toBe('00:00:00')
  });

  it('returns fifty nine seconds', () => {
    expect(humanReadable(59)).toBe('00:00:59')
  });

  it('returns one minute', () => {
    expect(humanReadable(60)).toBe('00:01:00')
  });

  it('returns fify nine minutes and fifty nine seconds', () => {
    expect(humanReadable(3599)).toBe('00:59:59')
  });

  it('returns one hour', () => {
    expect(humanReadable(3600)).toBe('01:00:00')
  });

  it('returns one second short of a day', () => {
    expect(humanReadable(86399)).toBe('23:59:59')
  });

  it('returns twenty four hours', () => {
    expect(humanReadable(86400)).toBe('24:00:00')
  });

  it('returns maximum time', () => {
    expect(humanReadable(359999)).toBe('99:59:59')
  });
});
