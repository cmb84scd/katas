require 'ten_minute_walk'

describe '#valid_walk?' do
  it 'returns false if less than 10 directions' do
    expect(valid_walk?(['w', 's'])).to eq false
  end

  it 'returns false if more than 10 directions' do
    expect(valid_walk?(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).to eq false
  end

  it 'returns true if directions have e x3, w x3, n x2 and s x2' do
    expect(valid_walk?(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).to eq true
  end

  it 'returns false if directions do not have e x3, w x3, n x2 and s x2' do
    expect(valid_walk?(['e', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).to eq false
  end
end
