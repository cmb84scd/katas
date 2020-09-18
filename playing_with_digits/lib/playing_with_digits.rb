def dig_pow(num, pow)
  num1 = num.digits.reverse
  num2 = []
  num1.each do |n|
    num2 << (n**pow)
    pow += 1
  end
  res = num2.sum / num.to_f
  (res % 1).zero? ? res : -1
end
