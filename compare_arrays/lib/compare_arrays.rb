class Array
  def contains_all?(other_array)
    (self & other_array.sort) == other_array.sort
  end
end
