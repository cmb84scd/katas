const add = require('./add.js')

describe('add', () => {
  it('adds 1 and 3', () => {
    expect(add(1)(3)).toBe(4)
  })

  it('adds 0 and -15', () => {
    expect(add(0)(-15)).toBe(-15)
  })

  it('adds 5 to new function', () => {
    const addThree = add(3)
    expect(addThree(5)).toBe(8)
  })
})
