def points(dice)
  array = dice.split('').map(&:to_i).sort
  case 
  when array[0] == array[4] then 50
  when array[0] == array[3] || array[1] == array[4] then 40
  when array[0] == array[1] && array[2] == array[4] then 30
  when array[0] == array[2] && array[3] == array[4] then 30
  when array == [1, 2, 3, 4, 5] || array == [2, 3, 4, 5, 6] || array == [1, 3, 4, 5, 6] then 20
  else 0
  end
end
