def dative(word)
  back_vowel = ['a', 'á', 'o', 'ó', 'u', 'ú']
  vowels = word.delete('bcdfghjklmnpqrstvwxyz').chars
  if back_vowel.any? { |w| vowels.last.include?(w) }
    "#{word}nak"
  else
    "#{word}nek"
  end
end
