def check_exam(arr1, arr2)
  score = 0
  index = 0

  while index < arr1.length do
    if arr1[index] == arr2[index]
      score += 4
    elsif arr1[index] != arr2[index]
      if arr2[index] == ''
        score += 0
      else
        score -= 1
      end
    end
    index += 1
  end

  score.negative? ? 0 : score
end
