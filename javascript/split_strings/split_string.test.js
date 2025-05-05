const solution = require('./split_string')

describe('solution', () => {
  it('splits short even string', () => {
    expect(solution('abcdef')).toStrictEqual(['ab', 'cd', 'ef'])
  })

  it('splits short uneven string', () => {
    expect(solution('abcdefg')).toStrictEqual(['ab', 'cd', 'ef', 'g_'])
  })

  it('returns empty array for empty string', () => {
    expect(solution('')).toStrictEqual([])
  })
})
