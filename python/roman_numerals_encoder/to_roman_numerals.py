def solution(n):
  roman = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'}

  if n in roman:
    return roman[n]

  res = ''
  for k, v in roman.items():
    x, y = divmod(n, k)
    res += v * x
    n = y

  return res
