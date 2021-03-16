const fireFight = require('./fireFight');

describe('fireFight', () => {
  it('returns ~~', () => {
    expect(fireFight('Fire')).toBe('~~');
  });

  it('returns ~~ ~~', () => {
    expect(fireFight('Fire Fire')).toBe('~~ ~~');
  });

  it('returns all instances of Fire with ~~', () => {
    expect(fireFight('Water Fire Boat Deck Hull Fire Propeller')).toBe('Water ~~ Boat Deck Hull ~~ Propeller')
  })
});
