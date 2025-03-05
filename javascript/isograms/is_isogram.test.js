const isIsogram = require('./is_isogram')

describe('isIsogram', () => {
  it('returns true if the string is an isogram', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true)
    expect(isIsogram('isogram')).toBe(true)
    expect(isIsogram('')).toBe(true)
  })

  it('returns false if the string is not an isogram', () => {
    expect(isIsogram('aba')).toBe(false)
    expect(isIsogram('moOse')).toBe(false)
    expect(isIsogram('isIsogram')).toBe(false)
  })
})
