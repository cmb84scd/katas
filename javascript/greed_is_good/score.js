function score(dice) {
  let points = 0

  for (let i = 1; i < 7; i++) {
    const count = dice.filter(x => x === i).length
    if (i === 1) {
      points += (count >= 3 ? 1000 : 0) + (100 * (count % 3))
    } else {
      points += count >= 3 ? 100 * i : 0
    }

    if (i === 5) {
      points += 50 * (count % 3)
    }
  }

  return points
}
module.exports = score;
