def duplicate_count(text):
    total = 0
    text = text.lower()
    unq = set(text)

    if len(text) == 0 or len(unq) == len(text):
        return total

    for i in unq:
        if text.count(i) > 1:
            total += 1

    return total
