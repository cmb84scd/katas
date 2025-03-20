const rgb = require('./rgb_to_hex')

describe('rgb', () => {
  it('converts rgb with zeros', () => {
    expect(rgb(0, 0, 0)).toBe('000000')
  })

  it('converts rgb with 255', () => {
    expect(rgb(255, 255, 255)).toBe('FFFFFF')
  })

  it('converts rgb with 123', () => {
    expect(rgb(1, 2, 3)).toBe('010203')
  })

  it('converts rgb with a negative number', () => {
    expect(rgb(-20, 255, 125)).toBe('00FF7D')
  })

  it('converts rgb with number over 255', () => {
    expect(rgb(-20, 275, 125)).toBe('00FF7D')
  })

  it('converts rgb with out of range numbers', () => {
    expect(rgb(300, -75, -20)).toBe('FF0000')
  })
})
