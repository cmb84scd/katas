# define your classes

class Human
end

class Man < Human
end

class Woman < Human
end

def god
  # and return array of instances
  adam = Man.new
  eve = Woman.new
  return [adam, eve]
end
