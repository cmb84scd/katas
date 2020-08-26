def highest_age(group1, group2)
  max_age = { 'names' => [], 'age' => -1 }
  total = {}
  for person in group1 + group2
    total[person['name']] = (total[person['name']] or 0) + person['age']
    if total[person['name']] > max_age['age']
      max_age['names'] += [person['name']]
      max_age['age'] = total[person['name']]
    end
  end
  total.select { |k, v| k if v.eql? total.values.max }.min[0]
end
