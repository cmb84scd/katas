def positive_to_negative(binary):
    if binary.count(0) == len(binary):
        return binary

    num = "".join("1" if i == 0 else "0" for i in binary)
    new_bin = bin(int(num, 2) + 1)[2:]

    return [int(x) for x in new_bin]
