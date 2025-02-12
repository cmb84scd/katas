const getMinMax = require('./get_min_max')

describe('getMinMax', () => {
  it('returns number twice for 1 element array', () => {
    expect(getMinMax([1])).toStrictEqual([1, 1])
  })

  it('returns number twice for 2 element array', () => {
    expect(getMinMax([1, 2])).toStrictEqual([1, 2])
  })

  it('handles unsorted array', () => {
    expect(getMinMax([3, 1, 2])).toStrictEqual([1, 3])
  })

  it('handles array with numbers of more than 1 digit', () => {
    expect(getMinMax([3, 15, 2, 21, 11, 2])).toStrictEqual([2, 21])
  })
})
