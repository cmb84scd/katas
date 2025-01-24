require 'bit_counting'

describe '#count_bits' do
  it 'returns 1' do
    expect(count_bits(4)).to eq 1
  end

  it 'returns 0' do
    expect(count_bits(0)).to eq 0
  end

  it 'returns 2' do
    expect(count_bits(10)).to eq 2
  end

  it 'returns 5' do
    expect(count_bits(1234)).to eq 5
  end
end
