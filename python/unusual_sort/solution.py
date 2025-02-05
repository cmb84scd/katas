def unusual_sort(array):
    num_list = []
    str_list = []

    if all(isinstance(i, int) for i in array):
        array.sort()
        return array

    for i in array:
        if type(i) is int or i.isnumeric():
            num_list.append(i)
        else:
            str_list.append(i)

    num_list.sort(key=lambda x: int(x))
    str_list.sort()

    for i in range(len(num_list) - 1):
        if type(num_list[i]) is str:
            if int(num_list[i]) == int(num_list[i + 1]):
                num_list[i], num_list[i + 1] = num_list[i + 1], num_list[i]

    return str_list + num_list
