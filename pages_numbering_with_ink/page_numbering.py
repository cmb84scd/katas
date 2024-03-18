import math

def pages_numbering_with_ink(current, number_of_digits):
  num = current
  digits = 0

  while digits < number_of_digits:
    digits += (int(math.log10(num)) + 1)
    if digits > number_of_digits:
      break
    num += 1

  return num - 1
