def next_smaller(n):
    s = str(n)
    num = None

    if s == "".join(sorted(s)):
        return -1

    for i in range(len(s) - 2, -1, -1):
        if s[i] > s[i + 1]:
            for j in range(len(s) - 1, i, -1):
                if s[i] > s[j]:
                    num = int(s[:i] + s[j] + s[-1:j:-1] + s[i] + s[j - 1 : i : -1])
                    break
            break

    return -1 if len(str(num)) < len(s) else num
