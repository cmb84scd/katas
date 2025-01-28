def unique_in_order(iterable)
  if iterable.is_a? String
    iterable = iterable.chars
  end
  iterable.chunk(&:itself).map(&:first)
end
