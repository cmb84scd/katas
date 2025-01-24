require 'regex_failure'

describe '#filter_words' do
  it 'replaces Bad with awesome' do
    phrase = "You're Bad! timmy!"
    expect(filter_words(phrase)).to eq "You're awesome! timmy!"
  end

  it 'replaces MEAN with awesome' do
    phrase = "You're MEAN! timmy!"
    expect(filter_words(phrase)).to eq "You're awesome! timmy!"
  end

  it 'replaces UgLy with awesome' do
    phrase = "You're UgLy! timmy!"
    expect(filter_words(phrase)).to eq "You're awesome! timmy!"
  end

  it 'replaces horribleish with awesome' do
    phrase = "You're horribleish! timmy!"
    expect(filter_words(phrase)).to eq "You're awesomeish! timmy!"
  end

  it 'replaces HiDeOusish with awesome' do
    phrase = "You're HiDeOusish! timmy!"
    expect(filter_words(phrase)).to eq "You're awesomeish! timmy!"
  end
end
