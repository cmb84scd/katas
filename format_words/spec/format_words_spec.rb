require 'format_words'

describe '#format_words' do
  it 'returns an empty string' do
    expect(format_words([])).to eq ''
  end

  it 'returns an empty string' do
    expect(format_words('')).to eq ''
  end

  it 'returns an empty string' do
    expect(format_words([''])).to eq ''
  end

  it 'returns a 3 word string' do
    expect(format_words(['ninja', 'ronin'])).to eq 'ninja and ronin'
  end

  it 'returns a 4 word string' do
    expect(format_words(['ninja', 'samurai', 'ronin'])).to eq 'ninja, samurai and ronin'
  end

  it 'returns a 3 word string' do
    expect(format_words(['ninja', '', 'ronin'])).to eq 'ninja and ronin'
  end

  it 'returns a 1 word string' do
    expect(format_words(['ninja'])).to eq 'ninja'
  end
end
