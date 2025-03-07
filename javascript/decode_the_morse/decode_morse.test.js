const decodeMorse = require('./decode_morse')

describe('decodeMorse', () => {
  it('should return "HEY JUDE"', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
  })

  it('should return "SOS" when morse code has no spaces', () => {
    expect(decodeMorse('...---...')).toBe('SOS')
  })

  it('should return "S O S"', () => {
    expect(decodeMorse('...   ---   ...')).toBe('S O S')
  })

  it('should return "SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    expect(decodeMorse('...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-')).toBe('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
  })
})
