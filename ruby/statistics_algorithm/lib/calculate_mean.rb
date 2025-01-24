def calc_mean(ary)
  if !ary.is_a?(Array) || ary.empty?
    0
  else
    ary.sum / ary.length
  end
end
