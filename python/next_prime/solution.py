import math


def next_prime(n):
    if n <= 1:
        return 2

    limit = 2 * n

    for i in range(n + 1, limit):
        inner_limit = int(math.sqrt(i)) + 1
        for j in range(2, inner_limit):
            if i % j == 0:
                break
        else:
            return i
