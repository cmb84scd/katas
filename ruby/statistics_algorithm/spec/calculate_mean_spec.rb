require 'calculate_mean'

describe '#calc_mean' do
  it 'returns 0 for non array input' do
    expect(calc_mean('abc')).to eq 0
  end

  it 'returns 0 for an empty array' do
    expect(calc_mean([])).to eq 0
  end

  it 'returns 2' do
    expect(calc_mean([1, 2, 3])).to eq 2
  end
end
