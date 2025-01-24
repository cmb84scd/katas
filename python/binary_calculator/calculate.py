def calculate(n1, n2, o):
    match o:
        case "add":
            return bin(int(n1, 2) + int(n2, 2))[2:]
        case "subtract":
            res = bin(int(n1, 2) - int(n2, 2))
            return res.replace("0b", "")
        case "multiply":
            return bin(int(n1, 2) * int(n2, 2))[2:]
