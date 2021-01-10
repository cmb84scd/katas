require 'sum_two_arrays'

describe '#sum_arrays' do
  it 'returns an empty array' do
    expect(sum_arrays([], [])).to eq []
  end

  it 'returns [3, 4, 1]' do
    expect(sum_arrays([3, 2, 9], [1, 2])).to eq [3, 4, 1]
  end

  it 'returns [-3, 9, 6, 2]' do
    expect(sum_arrays([3, 2, 6, 6], [-7, 2, 2, 8])).to eq [-3, 9, 6, 2]
  end
end
