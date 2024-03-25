import re

def solve(st):
  if len(st) % 2 != 0:
    return -1

  while '()' in st:
    st = st.replace('()', '')

  new_st = re.sub('\\)\\)|\\(\\(', '', st)
  return (len(st) - len(new_st)) / 2 + len(new_st)
