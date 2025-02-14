function isPrime(num) {
  const limit = Math.sqrt(num)

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) return false
  }

  return true
}

function nextPrime(n) {
  if (n <= 1) return 2

  const limit = 2 * n

  for (let i = n + 1; i <= limit; i++) {
    if (isPrime(i)) return i
  }
}
module.exports = nextPrime;
