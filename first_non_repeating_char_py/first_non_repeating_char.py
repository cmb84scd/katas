def first_non_repeating_letter(s):
  new_str = s.lower()

  for char in s:
    if new_str.count(char.lower()) == 1:
      return char

  return ''
