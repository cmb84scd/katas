function lastDigit(n, m) {
  if (m === 0n) {
    return 1n
  } else if (n % 10n === 0n & m % 10n === 0n) {
    return 0n
  } else {
    return ((n % 100n) ** (m % 40n)) % 10n
  }
}
module.exports = lastDigit;
