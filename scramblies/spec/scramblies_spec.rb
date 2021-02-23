require 'scramblies'

describe '#scramble' do
  it 'returns true' do
    expect(scramble('rkqodlw', 'world')).to be true
  end

  it 'returns false' do
    expect(scramble('katas', 'steak')).to be false
  end

  it 'returns true' do
    expect(scramble('scriptjava', 'javascript')).to be true
  end

  it 'returns true' do
    expect(scramble('scriptingjava', 'javascript')).to be true
  end
end
