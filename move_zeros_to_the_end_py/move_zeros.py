def move_zeros(lst):
  for x in lst:
    if x == 0:
      lst.append(lst.pop(lst.index(x)))
  return lst
