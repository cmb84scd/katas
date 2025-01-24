function firstNonRepeatingLetter(s) {
  const str = s.toLowerCase();

  for (const c in str) {
    if (str.indexOf(str[c]) === str.lastIndexOf(str[c])) {
      return s[c];
    }
  }
  return "";
}
module.exports = firstNonRepeatingLetter;
