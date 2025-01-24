const moveZeros = require('./move_zeros')

describe('moveZeros', () => {
  it('moves one 0 to the end', () => {
    expect(moveZeros([1, 0, 1, 2, 1, 3])).toStrictEqual([1, 1, 2, 1, 3, 0])
  });

  it('moves two 0 to the end', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).toStrictEqual([1, 1, 2, 1, 3, 0, 0])
  });
});
