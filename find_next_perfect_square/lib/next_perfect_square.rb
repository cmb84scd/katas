def find_next_square(sqr)
  num = Math.sqrt(sqr)
  num = num == num.to_i ? num.to_i : num

  if num.is_a? Integer
    (num + 1)**2
  else
    -1
  end
end
