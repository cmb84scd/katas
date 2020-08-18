require 'define_suit'

describe '#define_suit' do
  it 'returns clubs' do
    expect(define_suit('3C')).to eq 'clubs'
  end

  it 'returns diamonds' do
    expect(define_suit('5D')).to eq 'diamonds'
  end

  it 'returns spades' do
    expect(define_suit('8S')).to eq 'spades'
  end

  it 'returns hearts' do
    expect(define_suit('JH')).to eq 'hearts'
  end
end
