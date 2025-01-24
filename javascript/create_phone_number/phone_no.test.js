const createPhoneNumber = require('./phone_no');

describe('createPhoneNumber', () => {
  it('returns first phone number', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890')
  });

  it('returns second phone number', () => {
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe('(111) 111-1111')
  });

  it('returns third phone number', () => {
    expect(createPhoneNumber([0, 2, 3, 0, 5, 6, 0, 8, 9, 0])).toBe('(023) 056-0890')
  });
});
