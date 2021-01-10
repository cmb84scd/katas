def sum_arrays(array1, array2)
  return [] if array1.empty? && array2.empty?

  number = (array1.join.to_i + array2.join.to_i)
  number.to_s.scan(/-?\d/).map(&:to_i)
end
