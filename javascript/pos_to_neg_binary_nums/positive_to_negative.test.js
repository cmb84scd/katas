const positiveToNegative = require('./positive_to_negative')

describe('positiveToNegative', () => {
  it('changes binary 10 to negative', () => {
    expect(positiveToNegative([0, 0, 1, 0])).toStrictEqual([1, 1, 1, 0])
  })

  it('changes binary 11 to negative', () => {
    expect(positiveToNegative([0, 0, 1, 1])).toStrictEqual([1, 1, 0, 1])
  })

  it('returns input if it just contains zeros', () => {
    expect(positiveToNegative([0, 0, 0, 0])).toStrictEqual([0, 0, 0, 0])
  })

  it('handles larger than 4 bit binary', () => {
    expect(positiveToNegative([0, 1, 0, 0, 1])).toStrictEqual([1, 0, 1, 1, 1])
  })
})
