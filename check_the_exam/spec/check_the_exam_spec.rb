require 'check_the_exam'

describe '#check_exam' do
  it 'gives a score of 6' do
    expect(check_exam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])).to eq 6
  end

  it 'gives a score of 7' do
    expect(check_exam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', ''])).to eq 7
  end

  it 'gives a score of 16' do
    expect(check_exam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])).to eq 16
  end

  it 'gives a score of 0' do
    expect(check_exam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])).to eq 0
  end
end
