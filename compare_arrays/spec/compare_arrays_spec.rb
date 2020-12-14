require 'compare_arrays'

describe Array do
  items = (1..5).to_a

  describe '#contains_all?' do
    it 'returns true' do
      expect(items.contains_all?([1, 2, 3, 4, 5])).to eq true
    end

    it 'returns false' do
      expect(items.contains_all?([9, 2, 5, 4, 10])).to eq false
    end
  end
end
