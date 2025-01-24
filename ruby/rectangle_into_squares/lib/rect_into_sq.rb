def sq_in_rect(lng, wdth)
  return nil if lng == wdth

  squares = []
  while lng != wdth do
    smaller = lng < wdth ? lng : wdth
    bigger = lng > wdth ? lng : wdth
    squares << smaller
    lng = smaller
    wdth = bigger - smaller
  end
  squares << lng
end
