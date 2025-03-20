def rgb(r, g, b):
    rgb_arr = [r, g, b]
    rgb_arr = [0 if x < 0 else 255 if x > 255 else x for x in rgb_arr]

    r, g, b = rgb_arr

    return f"{r:02X}{g:02X}{b:02X}"
