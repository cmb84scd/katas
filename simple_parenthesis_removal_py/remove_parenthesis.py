def solve(s):
    res, op, stack = "", 1, [1]

    for x in s:
        if x == "(":
            stack.append(op)
        elif x == ")":
            stack.pop()
        elif x == "+":
            op = stack[-1]
        elif x == "-":
            op = -stack[-1]
        else:
            if res or op != 1:
                res += "+" if op == 1 else "-"
            res += x

    return res
