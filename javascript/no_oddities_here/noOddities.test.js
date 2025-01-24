const noOdds = require('./noOddities');

describe('noOdds', () => {
  it('returns [0]', () => {
    expect(noOdds([0])).toStrictEqual([0]);
  });

  it('returns [2]', () => {
    expect(noOdds([1, 2])).toStrictEqual([2]);
  });

  it('returns [2, 4]', () => {
    expect(noOdds([1, 2, 3, 4])).toStrictEqual([2, 4])
  });
});
