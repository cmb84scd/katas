def points(dice)
  dice = dice.chars.sort.join

  return 50 if dice.count(dice[0]) == 5
  return 40 if dice.count(dice[0]) == 4 || dice.count(dice[4]) == 4
  return 30 if dice.chars.uniq.size == 2
  return 20 if dice =~ /12345|23456|13456/
  0
end

# Below is my original version and above is my refactored version

# def points(dice)
#   array = dice.split('').map(&:to_i).sort
#   case
#   when array[0] == array[4] then 50
#   when array[0] == array[3] || array[1] == array[4] then 40
#   when array[0] == array[1] && array[2] == array[4] then 30
#   when array[0] == array[2] && array[3] == array[4] then 30
#   when array == [1, 2, 3, 4, 5] || array == [2, 3, 4, 5, 6] || array == [1, 3, 4, 5, 6] then 20
#   else 0
#   end
# end
