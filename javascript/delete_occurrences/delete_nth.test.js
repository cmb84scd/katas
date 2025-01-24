const deleteNth = require('./delete_nth');

describe('deleteNth', () => {
  test('should remove one extra duplication', () => {
    expect(deleteNth([20, 37, 20, 21], 1)).toStrictEqual([20, 37, 21]);
  });

  test('should remove two extra duplications', () => {
    expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 2)).toStrictEqual([1, 1, 3, 3, 7, 2, 2]);
  });

  test('should remove multiple extra duplications', () => {
    expect(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)).toStrictEqual([1, 2, 3, 1, 2, 3]);
  });
});
