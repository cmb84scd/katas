def solve(s):
    length = len(s)
    res = [None] * length
    index = 0
    i = 0
    stack = [0]

    while i < length:
        if s[i] == "+":
            if stack[-1] == 1:
                res[index] = "-"
                index += 1
            if stack[-1] == 0:
                res[index] = "+"
                index += 1
        elif s[i] == "-":
            if stack[-1] == 1:
                res[index] = "+"
                index += 1
            if stack[-1] == 0:
                res[index] = "-"
                index += 1
        elif s[i] == "(" and i > 0:
            if s[i - 1] == "-":
                x = 0 if stack[-1] == 1 else 1
                stack.append(x)
            elif s[i - 1] == "+":
                stack.append(stack[-1])
        elif stack and s[i] == ")":
            stack.pop()
        else:
            res[index] = s[i]
            index += 1
        i += 1

    res = [x for x in res if x not in ["(", ")", None]]
    result = []

    for x in range(len(res)):
        if res[x] == "+" and res[x + 1] == "-":
            continue
        elif res[x] == "-" and res[x + 1] == "+":
            continue
        else:
            result.append(res[x])

    if result[0] == "+":
        result.pop(0)

    return "".join(result)
