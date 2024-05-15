def power_mod(x, y, n):
  num = 1
  while 1:
    if y % 2 == 1:
      num = num * x % n
    y //= 2
    if y == 0:
      break
    x = x * x % n

  return num
