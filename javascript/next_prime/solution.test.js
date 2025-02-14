const nextPrime = require('./solution')

describe('nextPrime', () => {
  it('returns 2 when passed 0', () => {
    expect(nextPrime(0)).toBe(2)
  })

  it('returns 3 when passed 2', () => {
    expect(nextPrime(2)).toBe(3)
  })

  it('returns 5 when passed 3', () => {
    expect(nextPrime(3)).toBe(5)
  })

  it('returns 17 when passed 13', () => {
    expect(nextPrime(13)).toBe(17)
  })

  it('handles low 3 digit numbers', () => {
    expect(nextPrime(181)).toBe(191)
  })

  it('handles high 3 digit numbers', () => {
    expect(nextPrime(911)).toBe(919)
  })
})
