def is_infinite_process(a, b)
  if a <= b && (b - a).even?
    false
  else
    true
  end
end
