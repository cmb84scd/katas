function findDup(array) {
  const unique = new Set()

  const dup = array.filter(x => {
    if (unique.has(x)) {
      return x
    } else {
      unique.add(x)
    }
  })
  return dup[0]
}
module.exports = findDup;
