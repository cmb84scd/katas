const solution = require('./solution')

describe('solution', () => {
  it('handles 1 digit number', () => {
    expect(solution(5)).toBe('Value is 00005')
  })

  it('handles 2 digit number', () => {
    expect(solution(12)).toBe('Value is 00012')
  })

  it('handles 3 digit number', () => {
    expect(solution(109)).toBe('Value is 00109')
  })

  it('handles 4 digit number', () => {
    expect(solution(1204)).toBe('Value is 01204')
  })

  it('handles 5 digit number', () => {
    expect(solution(12345)).toBe('Value is 12345')
  })
})
