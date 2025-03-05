def is_isogram(string):
    return len(string) == len(set(string.lower()))


# Below is my original answer and above is my rafactored one

# def is_isogram(string):
#     unq_str = set(string.lower())

#     if len(unq_str) != len(string):
#         return False

#     return True
