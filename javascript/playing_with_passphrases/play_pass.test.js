const playPass = require('./play_pass')

describe('playPass', () => {
  it('handles a simple phrase', () => {
    expect(playPass('I LOVE YOU!!!', 1)).toBe('!!!vPz fWpM J')
  })

  it('handles a phrase with the letter z', () => {
    expect(playPass('!!!VPZ FWPM J', 25)).toBe('I LoVe yOu!!!')
  })

  it('handles a simple phrase with letters and numbers', () => {
    expect(playPass('AZ12345678ZA', 1)).toBe('bA12345678aB')
  })

  it('handles a one word phrase with just letters', () => {
    expect(playPass('AAABBCCY', 1)).toBe('zDdCcBbB')
  })

  it('handles a long phrase with letters and numbers', () => {
    expect(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2))
      .toBe('4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO')
  })
})
