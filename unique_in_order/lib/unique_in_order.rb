def unique_in_order(iterable)
  if iterable.is_a? String
    iterable = iterable.split(//)
  end
  iterable.chunk(&:itself).map(&:first)
end
