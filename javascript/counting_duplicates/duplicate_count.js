function duplicateCount(text) {
  let total = 0
  text = text.toLowerCase()
  let unq = new Set(text)

  if (text.length === 0 || text.length === unq.size) return total

  for (let i of unq) {
    if (text.match(new RegExp(`${i}`, "g")).length > 1) {
      total += 1
    }
  }

  return total
}
module.exports = duplicateCount;
