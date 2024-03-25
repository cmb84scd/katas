from math import ceil

def solve(st):
  if len(st) % 2 != 0:
    return -1

  while '()' in st:
    st = st.replace('()', '')

  return ceil(st.count('(') / 2) + ceil(st.count(')') / 2)
