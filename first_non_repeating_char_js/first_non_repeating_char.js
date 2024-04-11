function firstNonRepeatingLetter(s) {
  const strArr = s.replaceAll(' ', '').toLowerCase().split('')

  for (const c in s) {
    const count = strArr.filter(ele => ele === s.charAt(c).toLowerCase()).length
    if (count === 1) {
      return s.charAt(c)
    }
  }
  return ''
}
module.exports = firstNonRepeatingLetter;
