def mirror(data: list) -> list:
    if len(data) < 2:
        return data

    data1 = sorted(data)
    data2 = sorted(data, reverse=True)

    return data1 + data2[1:]
