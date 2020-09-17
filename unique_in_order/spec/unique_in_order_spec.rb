require 'unique_in_order'

describe '#unique_in_order' do
  it 'returns a string of capitals as a unique array' do
    expect(unique_in_order('AAAABBBCCDAABBB')).to eq ['A', 'B', 'C', 'D', 'A', 'B']
  end

  it 'returns a mixed string as a unique array' do
    expect(unique_in_order('ABBCcAD')).to eq ['A', 'B', 'C', 'c', 'A', 'D']
  end

  it 'returns an array as a unique array' do
    expect(unique_in_order([1, 2, 2, 3, 3])).to eq [1, 2, 3]
  end
end
