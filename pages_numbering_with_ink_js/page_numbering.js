function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits > 0) {
    numberOfDigits -= String(current).length
    if (numberOfDigits < 0) {
      break
    }
    current++
  }
  return current - 1
}
module.exports = pagesNumberingWithInk;
