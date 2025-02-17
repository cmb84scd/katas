const high = require('./highest_score')

describe('high', () => {
  it('returns taxi', () => {
    expect(high('man i need a taxi up to ubud')).toBe('taxi')
  })

  it('returns volcano', () => {
    expect(high('what time are we climbing up the volcano')).toBe('volcano')
  })

  it('returns semynak', () => {
    expect(high('take me to semynak')).toBe('semynak')
  })

  it('returns aa', () => {
    expect(high('aa b')).toBe('aa')
  })

  it('returns b', () => {
    expect(high('b aa')).toBe('b')
  })
})
