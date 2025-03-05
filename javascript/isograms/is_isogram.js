function isIsogram(str) {
  if (str.length === new Set(str.toLowerCase()).size) {
    return true
  }

  return false
}
module.exports = isIsogram;
