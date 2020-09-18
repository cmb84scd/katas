require 'playing_with_digits'

describe '#dig_pow' do
  it 'returns 1' do
    expect(dig_pow(89, 1)).to eq 1
  end

  it 'returns -1' do
    expect(dig_pow(92, 1)).to eq(-1)
  end

  it 'returns 51' do
    expect(dig_pow(46_288, 3)).to eq 51
  end
end
