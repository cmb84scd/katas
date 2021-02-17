require 'sum_of_parts'

describe '#parts_sums' do
  it 'returns an array with three sums' do
    expect(parts_sums([2, 4])).to eq [6, 4, 0]
  end

  it 'returns an array with four sums' do
    expect(parts_sums([2, 4, 6])).to eq [12, 10, 6, 0]
  end
end
