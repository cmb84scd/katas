def play_pass(s, n):
    count = 0
    new_s = ""

    for c in s:
        if c.isalpha():
            if ord(c) + n > 90:
                char = chr(ord(c) + n - 26)
            else:
                char = chr(ord(c) + n)
            if count % 2 != 0:
                char = char.lower()
        elif c.isdigit():
            char = str(9 - int(c))
        else:
            char = c

        new_s += char
        count += 1

    return new_s[::-1]
