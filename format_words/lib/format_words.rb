def format_words(words)
  return '' if words.nil? || words.empty? || words == ['']
  
  words.delete('')
  word = words[-1]
  case
  when words.length == 1 then word
  when words.length == 2 then words.join(' and ')
  when words.length > 2
    words.pop[-1]
    words.join(', ') + ' and ' + word
  end
end
