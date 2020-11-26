def solution(number)
  return 0 if number < 3

  numbers = Array(1..(number - 1))
  multiples = []
  numbers.each do |n|
    if (n % 3).zero? || (n % 5).zero?
      multiples << n
    end
  end
  multiples.sum
end
