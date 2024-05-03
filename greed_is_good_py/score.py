def score(dice):
  points = 0
  for x in range(1, 7):
    count = dice.count(x)
    if x == 1:
      points += (1000 if count >= 3 else 0) + (100 * (count % 3))
    else:
      points += 100 * x if count >= 3 else 0
    if x == 5:
      points += 50 * (count % 3)

  return points
