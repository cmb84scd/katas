require 'next_perfect_square'

describe '#find_next_square' do
  it 'returns 144' do
    expect(find_next_square(121)).to eq 144
  end

  it 'returns -1' do
    expect(find_next_square(114)).to eq(-1)
  end
end
