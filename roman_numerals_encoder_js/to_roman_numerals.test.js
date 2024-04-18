const solution = require('./to_roman_numerals')

describe('solution', () => {
  it('returns I for one', () => {
    expect(solution(1)).toBe('I')
  });

  it('returns IV for four', () => {
    expect(solution(4)).toBe('IV')
  });

  it('returns XIV for fourteen', () => {
    expect(solution(14)).toBe('XIV')
  });

  it('returns XXI for twenty one', () => {
    expect(solution(21)).toBe('XXI')
  });

  it('returns CMLXXXIV for 984', () => {
    expect(solution(984)).toBe('CMLXXXIV')
  });

  it('returns MDCCCLXXXIX for 1889', () => {
    expect(solution(1889)).toBe('MDCCCLXXXIX')
  });
});
