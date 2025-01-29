from typing import Callable


def add(n: int) -> Callable:
    def inner_add(m: int) -> int:
        return n + m

    return inner_add
