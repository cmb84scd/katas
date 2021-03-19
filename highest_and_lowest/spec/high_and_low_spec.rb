require 'high_and_low'

describe '#high_and_low' do
  it "returns '8 2'" do
    expect(high_and_low('2 8')).to eq '8 2'
  end

  it "returns '18 2'" do
    expect(high_and_low('2 8 18')).to eq '18 2'
  end

  it "returns '9 -5'" do
    expect(high_and_low('1 9 3 4 -5')).to eq '9 -5'
  end
end
