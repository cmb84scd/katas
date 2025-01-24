require 'who_likes_it'

describe '#likes' do
  it "returns 'no one likes this'" do
    expect(likes([])).to eq 'no one likes this'
  end

  it "returns 'Peter likes this'" do
    expect(likes(['Peter'])).to eq 'Peter likes this'
  end

  it "returns 'Jacob and Alex like this'" do
    expect(likes(['Jacob', 'Alex'])).to eq 'Jacob and Alex like this'
  end

  it "returns 'Max, John and Mark like this'" do
    expect(likes(['Max', 'John', 'Mark'])).to eq 'Max, John and Mark like this'
  end

  it "returns 'Alex, Jacob and 2 others like this'" do
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).to eq 'Alex, Jacob and 2 others like this'
  end
end
