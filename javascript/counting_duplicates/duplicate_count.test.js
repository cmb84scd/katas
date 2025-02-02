const duplicateCount = require('./duplicate_count')

describe('duplicateCount', () => {
  it('returns 0 for empty string', () => {
    expect(duplicateCount('')).toBe(0)
  })

  it('returns 1 for string with 1 duplicate', () => {
    expect(duplicateCount('abcdeaa')).toBe(1)
  })

  it('returns 0 for string with 0 duplicates', () => {
    expect(duplicateCount('abcde')).toBe(0)
  })

  it('returns 2 for string with 2 duplicates', () => {
    expect(duplicateCount('abcdeaB')).toBe(2)
  })

  it('returns 2 for mixed string with 2 duplicates', () => {
    expect(duplicateCount('aA11')).toBe(2)
  })
})
