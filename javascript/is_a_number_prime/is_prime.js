function isPrime(num) {
  if (num <= 1) return false
  /* Calculating sqrt here means only doing it once,
  which more efficient as the loop will do it each time.
  */
  const limit = Math.sqrt(num)

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) return false
  }

  return true
}
module.exports = isPrime;
