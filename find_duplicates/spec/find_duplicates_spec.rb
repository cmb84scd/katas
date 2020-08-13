require 'find_duplicates'

describe '#num_duplicates' do
  it 'finds 2 duplicate words' do
    message = 'Learning is a fun challenge. Fun is what keeps me interested!'
    expect(num_duplicates(message)).to eq 2
  end

  it 'finds 3 duplicate words' do
    message = 'Kata make the brain grow strong. The brain like kata.'
    expect(num_duplicates(message)).to eq 3
  end
end
