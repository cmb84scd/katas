function playPass(s, n) {
  let newStr = ''

  for (let c in s) {
    let char = s.charCodeAt(c)

    if (char >= 65 && char <= 90) {
      char += n
      if (char > 90) char -= 26

      char = String.fromCharCode(char)
      if (c % 2 !== 0) char = char.toLowerCase()

    } else if (!isNaN(s[c]) && s[c] !== ' ') {
      char = String(9 - Number(s[c]))
    } else {
      char = s[c]
    }

    newStr = char + newStr
  }

  return newStr
}
module.exports = playPass;
