def digitwise_addition(n, k):
    MOD = 10**9 + 7
    digits = [0] * 10

    for digit in str(n):
        digits[int(digit)] += 1

    for i in range(k):
        i = -i % 10
        digits[i] = (digits[i] + digits[i - 1]) % MOD

    return sum(digits) % MOD
