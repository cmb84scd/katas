def scramble(str1, str2)
  str2.chars.uniq.all? { |x| str2.count(x) <= str1.count(x) }
end
