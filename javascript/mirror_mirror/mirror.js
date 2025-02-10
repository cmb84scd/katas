function mirror(data) {
  if (data.length < 2) return data

  // Codewars uses node 18 which doesn't support toSorted() and toReversed()
  let data1 = [...data].sort((a, b) => a - b)
  let data2 = [...data1].reverse()
  data1.pop()

  return data1.concat(data2)
}
module.exports = mirror;
