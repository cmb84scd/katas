def digitwise_addition(n, k):
    MOD = 10**9 + 7
    digits = [str(n).count(str(i)) for i in range(10)]

    for _ in range(k):
        digits = digits[9:] + digits[:9]
        digits[1] = (digits[1] + digits[0]) % MOD

    return sum(digits) % MOD
