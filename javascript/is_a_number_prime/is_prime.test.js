const isPrime = require('./is_prime')

describe('isPrime', () => {
  it('returns false for 1', () => {
    expect(isPrime(1)).toBe(false)
  })

  it('returns true for 2', () => {
    expect(isPrime(2)).toBe(true)
  })

  it('returns false for negative numbers', () => {
    expect(isPrime(-1)).toBe(false)
  })
})
