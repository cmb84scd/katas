const generateHashtag = require('./generate_hashtag')

describe('generateHashtag', () => {
  it('returns false for empty string', () => {
    expect(generateHashtag('')).toEqual(false)
  });

  it('returns false for string longer than 140 chars', () => {
    expect(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat')).toEqual(false)
  });

  it('returns string with hash in front for one word', () => {
    expect(generateHashtag('Codewars')).toBe('#Codewars')
  });

  it('returns string with trailing whitespace removed', () => {
    expect(generateHashtag('Codewars      ')).toBe('#Codewars')
  });

  it('returns string with leading whitespace removed', () => {
    expect(generateHashtag('      Codewars')).toBe('#Codewars')
  });

  it('returns string with spaces removed', () => {
    expect(generateHashtag('Codewars Is Nice')).toBe('#CodewarsIsNice')
  });

  it('returns string with the first letter of each word capitalized', () => {
    expect(generateHashtag('codewars is nice')).toBe('#CodewarsIsNice')
  });

  it('returns string with only the first letter in each word capitalized', () => {
    expect(generateHashtag('CoDeWaRs is niCe')).toBe('#CodewarsIsNice')
  });

  it('returns string with single letter words capitalized', () => {
    expect(generateHashtag('c i n')).toBe('#CIN')
  });

  it('returns string with unnecessary middle spaces removed', () => {
    expect(generateHashtag('codewars  is  nice')).toBe('#CodewarsIsNice')
  });
});
