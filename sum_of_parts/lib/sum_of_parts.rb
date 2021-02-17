def parts_sums(lst)
  lst.each_with_object([lst.sum]) { |n, arr| arr << arr.last - n }
end
