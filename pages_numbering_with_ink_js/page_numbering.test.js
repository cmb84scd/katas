const pagesNumberingWithInk = require('./page_numbering');

describe('pagesNumberingWithInk', () => {
  it('returns 5', () => {
    expect(pagesNumberingWithInk(1, 5)).toBe(5)
  });

  it('returns 22', () => {
    expect(pagesNumberingWithInk(21, 5)).toBe(22)
  });

  it('returns 10', () => {
    expect(pagesNumberingWithInk(8, 4)).toBe(10)
  });

  it('returns 23', () => {
    expect(pagesNumberingWithInk(21, 6)).toBe(23)
  });

  it('returns 166', () => {
    expect(pagesNumberingWithInk(76, 250)).toBe(166)
  });

  it('returns 419', () => {
    expect(pagesNumberingWithInk(80, 1000)).toBe(419)
  });
});
