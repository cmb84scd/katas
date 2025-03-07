from morse_code_dict import MORSE_CODE


def decode_morse(morse_code):
    decoded = ""

    for word in morse_code.strip().split("   "):
        for char in word.split(" "):
            decoded += MORSE_CODE[char]
        decoded += " "

    return decoded.strip()
