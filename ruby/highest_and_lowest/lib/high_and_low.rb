def high_and_low(numbers)
  array = numbers.split(' ').map(&:to_i)
  "#{array.max} #{array.min}"
end
