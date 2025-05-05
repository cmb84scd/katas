def solution(s):
    if s == "":
        return []

    res = [s[i : i + 2] for i in range(0, len(s), 2)]

    if len(res[-1]) == 1:
        res[-1] += "_"

    return res
