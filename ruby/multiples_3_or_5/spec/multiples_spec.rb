require 'multiples'

describe '#solution' do
  it 'returns 0 given an input of -5' do
    expect(solution(-5)).to eq 0
  end

  it 'returns 23 given an input of 10' do
    expect(solution(10)).to eq 23
  end

  it 'returns 78 given an input of 20' do
    expect(solution(20)).to eq 78
  end

  it 'returns 9168 given an input of 200' do
    expect(solution(200)).to eq 9168
  end
end
