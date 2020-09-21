def likes(names)
  case
  when names.length.zero? then 'no one likes this'
  when names.length == 1 then "#{names[0]} likes this"
  when names.length == 2 then "#{names[0]} and #{names[1]} like this"
  when names.length == 3 then "#{names[0]}, #{names[1]} and #{names[2]} like this"
  else "#{names[0]}, #{names[1]} and #{names.count - 2} others like this"
  end
end
