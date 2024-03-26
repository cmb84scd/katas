def find_dup(arr):
  unique = set()

  for x in arr:
    if x in unique:
      return x
    else:
      unique.add(x)
