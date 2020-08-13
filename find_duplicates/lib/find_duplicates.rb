def num_duplicates(message)
  # track my duplicates in an array
  duplicates = []
  # track all of the words we've looped over
  words = []
  message = message.gsub('.', '')
  # split on spaces and loop over each word
  message.split(" ").each do | word |
    # set each word to lower case and only accept
    # characters in the alphabet and hyphens
    word = word.downcase.match("[a-zA-Z-]*")
    # is this a dulpicate?
    isDuplicate = words.include?(word)
    # have we found this duplicate already?
    alreadyFound = duplicates.include? word

    if(isDuplicate and !alreadyFound)
      # new duplicate found
      duplicates << word
    end
    # record our translated word
    words << word
  end
  # return the size of our duplicates
  duplicates.size
end
