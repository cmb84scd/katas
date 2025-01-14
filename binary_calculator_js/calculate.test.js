const calculate = require('./calculate');

describe('calculate', () => {
  it('should add binary numbers', () => {
    expect(calculate("1", "1", 'add')).toBe("10");
  });

  it('should subtract binary numbers', () => {
    expect(calculate("1", "10", 'subtract')).toBe("-1");
  });

  it('should multiply binary numbers', () => {
    expect(calculate("1", "1", 'multiply')).toBe("1");
  });
});
