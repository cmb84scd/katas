function modpow(x, y, n) {
  let num = 1
  while (y) {
    if (y % 2) {
      num = num * x % n
    }
    y = Math.floor(y / 2)
    x = x * x % n
  }

  return num
}
module.exports = modpow;
