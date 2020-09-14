require 'find_outlier'

describe '#find_outlier' do
  it 'returns the only odd number' do
    array = [2, 4, 0, 100, 4, 11, 2602, 36]
    expect(find_outlier(array)).to eq 11
  end

  it 'returns the only even number' do
    array = [160, 3, 1719, 19, 11, 13, -21]
    expect(find_outlier(array)).to eq 160
  end
end
