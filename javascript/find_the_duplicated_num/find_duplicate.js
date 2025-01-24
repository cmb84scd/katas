function findDup(array) {
  const unique = new Set()

  for (const x of array) {
    if (unique.has(x)) {
      return x
    } else {
      unique.add(x)
    }
  }
}
module.exports = findDup;
