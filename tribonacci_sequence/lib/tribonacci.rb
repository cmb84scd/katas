def tribonacci(signature, num)
  return [] if num.zero?
  
  (3..num).each do |n|
    signature[n] = signature[n - 1] + signature[n - 2] + signature[n - 3]
  end
  signature.slice(0, num)
end
