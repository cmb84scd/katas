function digitwiseAddition(N, K) {
  const mod = 10 ** 9 + 7
  let digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let sum = 0

  for (let digit of String(N)) {
    digits[Number(digit)] += 1
  }

  for (let i = 1; i <= K; i++) {
    digits.unshift(digits.pop())
    digits[1] = (digits[1] + digits[0]) % mod
  }

  digits.forEach((d) => sum += d)
  return sum % mod
}
module.exports = digitwiseAddition;
