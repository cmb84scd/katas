import math

def pages_numbering_with_ink(current, number_of_digits):
  while number_of_digits > 0:
    number_of_digits -= (int(math.log10(current)) + 1)
    if number_of_digits < 0:
      break
    current += 1

  return current - 1
