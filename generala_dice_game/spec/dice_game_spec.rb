require 'dice_game'

describe '#points' do
  it 'returns a score of 50 points' do
    expect(points('44444')).to eq 50
  end

  it 'returns a score of 40 points' do
    expect(points('33233')).to eq 40
  end

  it 'returns a score of 30 points' do
    expect(points('12121')).to eq 30
  end

  it 'returns a score of 30 points' do
    expect(points('12122')).to eq 30
  end

  it 'returns a score of 20 points' do
    expect(points('35264')).to eq 20
  end

  it 'returns a score of 20 points' do
    expect(points('35641')).to eq 20
  end

  it 'returns 0 points' do
    expect(points('25146')).to eq 0
  end

  it 'returns 0 points' do
    expect(points('44421')).to eq 0
  end
end
