def positive_sum(arr)
  new_arr = []
  arr.each { |n| new_arr << n if n.positive? }
  new_arr.sum
end
