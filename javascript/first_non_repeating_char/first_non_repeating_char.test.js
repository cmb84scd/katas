const firstNonRepeatingLetter = require('./first_non_repeating_char');

describe('firstNonRepeatingChar', () => {
  it('returns t from simple word', () => {
    expect(firstNonRepeatingLetter('stress')).toBe('t')
  });

  it('handles a single letter word', () => {
    expect(firstNonRepeatingLetter('a')).toBe('a')
  });

  it('handles empty strings', () => {
    expect(firstNonRepeatingLetter('')).toBe('')
  });

  it('handles words with no unique chars', () => {
    expect(firstNonRepeatingLetter('abba')).toBe('')
  });

  it('handles exotic chars', () => {
    expect(firstNonRepeatingLetter('~><#~><')).toBe('#')
  });

  it('handles letter case correctly', () => {
    expect(firstNonRepeatingLetter('sTreSS')).toBe('T')
  });

  it('handles letter case and non letter chars', () => {
    expect(firstNonRepeatingLetter('Go hang a salami, I\'m a lasagna hog!')).toBe(',')
  });
});
