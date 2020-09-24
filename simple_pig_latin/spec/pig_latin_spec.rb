require 'pig_latin'

describe '#pig_it' do
  it "returns 'igPay atinlay siay oolcay'" do
    expect(pig_it('Pig latin is cool')).to eq 'igPay atinlay siay oolcay'
  end

  it "returns 'elloHay orldway !'" do
    expect(pig_it('Hello world !')).to eq 'elloHay orldway !'
  end
end
