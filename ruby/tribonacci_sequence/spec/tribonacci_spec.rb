require 'tribonacci'

describe '#tribonacci' do
  it 'returns an empty array' do
    expect(tribonacci([1, 2, 3], 0)).to eq []
  end

  it 'returns a tribonacci array of 10 numbers' do
    expect(tribonacci([1, 2, 3], 10)).to eq [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]
  end

  it 'returns a tribonacci array from an array including zeros' do
    expect(tribonacci([0, 0, 1], 10)).to eq [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
  end
end
