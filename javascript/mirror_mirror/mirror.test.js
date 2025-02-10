const mirror = require('./mirror')

describe('mirror', () => {
  it('returns an empty array when given an empty array', () => {
    expect(mirror([])).toEqual([])
  })

  it('returns an array with one element when given an one element array', () => {
    expect(mirror([1])).toEqual([1])
  })

  it('returns mirrored array when given 2 element array', () => {
    expect(mirror([2, 1])).toEqual([1, 2, 1])
  })

  it('returns mirrored array when given 3 element array', () => {
    expect(mirror([1, 3, 2])).toEqual([1, 2, 3, 2, 1])
  })

  it('handles negative numbers correctly', () => {
    expect(mirror([-321, -551, -582, -862, -944, 739, 520, 616, 859, 773]))
      .toEqual([-944, -862, -582, -551, -321, 520, 616, 739, 773, 859, 773, 739, 616, 520, -321, -551, -582, -862, -944])
  })
})
