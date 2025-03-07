const MORSE_CODE = require('./morse_code_dict')

function decodeMorse(morseCode) {
  let words = morseCode.trim().split('   ')

  let decodedWords = words.map(word => {
    let chars = word.split(' ')
    let decodedChars = chars.map(char => MORSE_CODE[char])
    return decodedChars.join('')
  })

  return decodedWords.join(' ')
}
module.exports = decodeMorse;
