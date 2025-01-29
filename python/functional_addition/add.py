from typing import Callable


def add(n: int) -> Callable:
    def inner_add(m: int) -> int:
        return n + m

    return inner_add


# Could also be done like this:
# def add(n):
#     return lambda m: n + m
