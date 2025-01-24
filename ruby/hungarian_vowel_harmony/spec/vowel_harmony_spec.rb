require 'vowel_harmony'

describe '#dative' do
  it 'returns ablaknak' do
    expect(dative('ablak')).to eq 'ablaknak'
  end

  it 'returns széknek' do
    expect(dative('szék')).to eq 'széknek'
  end
end
