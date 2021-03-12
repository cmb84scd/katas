require 'sum_of_positive'

describe '#positive_sum' do
  it 'returns 0 for empty array' do
    expect(positive_sum([])).to eq 0
  end

  it 'returns 0 for array with -1' do
    expect(positive_sum([-1])).to eq 0
  end

  it 'returns 2 for array [-1, 2]' do
    expect(positive_sum([-1, 2])).to eq 2
  end

  it 'returns 9 for array [-1,2,3,4,-5]' do
    expect(positive_sum([-1,2,3,4,-5])).to eq 9
  end

  it 'returns 0 for array [-1,-2,-3,-4,-5]' do
    expect(positive_sum([-1,-2,-3,-4,-5])).to eq 0
  end
end
