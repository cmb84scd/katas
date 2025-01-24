def valid_walk?(walk)
  walk.count == 10 && walk.count('n') == walk.count('s') && walk.count('e') == walk.count('w')
end
