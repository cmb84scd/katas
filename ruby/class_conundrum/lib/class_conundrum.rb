class List
  attr_reader :items, :counter
  def initialize(type)
    @type = type
    @items = []
    @counter = 0
    self
  end

  def add(item)
    if item.class != @type then return "This item is not of type: #{@type}" end

    @items << item
    @counter += 1
    self
  end
end
