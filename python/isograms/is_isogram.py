def is_isogram(string):
    unq_str = set(string.lower())

    if len(unq_str) != len(string):
        return False

    return True
