const partlist = require('./part_list')

describe('partlist', () => {
  it('handles 2 element list', () => {
    expect(partlist(["I", "wish"])).toEqual([["I", "wish"]])
  })

  it('handles 3 element list', () => {
    expect(partlist(["I", "wish", "I"])).toEqual([["I", "wish I"], ["I wish", "I"]])
  })

  it('handles 4 element list', () => {
    expect(partlist(["I", "wish", "I", "hadn't"]))
      .toEqual([["I", "wish I hadn't"], ["I wish", "I hadn't"], ["I wish I", "hadn't"]])
  })

  it('handles 5 element list', () => {
    expect(partlist(["I", "wish", "I", "hadn't", "come"])).toEqual([
      ["I", "wish I hadn't come"],
      ["I wish", "I hadn't come"],
      ["I wish I", "hadn't come"],
      ["I wish I hadn't", "come"]
    ])
  })
})
