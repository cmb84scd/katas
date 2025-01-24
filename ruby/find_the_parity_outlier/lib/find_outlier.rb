def find_outlier(integers)
  array1 = []
  array2 = []
  integers.each do |num|
    if num.even?
      array1 << num
    else
      array2 << num
    end
  end
  array1.length > 1 ? array2[0] : array1[0]
end
