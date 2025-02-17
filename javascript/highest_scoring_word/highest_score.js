function high(x) {
  const words = x.split(' ')

  const scores = words.map(word => {
    let score = 0
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96
    }
    return score
  })

  return words[scores.indexOf(Math.max(...scores))]
}
module.exports = high;
