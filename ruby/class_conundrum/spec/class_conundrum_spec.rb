require 'class_conundrum'

describe List do
  let(:my_list) { List.new(String) }

  describe '#add' do
    it 'returns a count of 1' do
      my_list.add('Hello')
      expect(my_list.counter).to eq 1
    end

    it 'returns a count of 3' do
      my_list.add('Hello')
      my_list.add(' ')
      my_list.add('World!')
      expect(my_list.counter).to eq 3
    end

    it 'checks if item is of type' do
      expect(my_list.add(5)).to eq "This item is not of type: String"
    end
  end
end

# I had to amend the first 2 tests as a result of removing self from the code.
# With self removed, I couldn't chain the adds together.
