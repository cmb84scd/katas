require 'algorithmic_predicament'

describe '#highest_age' do
  it 'returns the first name of the highest total age' do
    group1 = [{ 'name' => 'kay', 'age' => 1 }, { 'name' => 'john', 'age' => 13 }, { 'name' => 'kay', 'age' => 76 }]
    group2 = [{ 'name' => 'john', 'age' => 1 }, { 'name' => 'alice', 'age' => 77 }]
    expect(highest_age(group1, group2)).to eq 'alice'
  end

  it 'returns the name of the highest total age' do
    group1 = [{ 'name' => 'kay', 'age' => 1 }, { 'name' => 'john', 'age' => 13 }, { 'name' => 'kay', 'age' => 76 }]
    group2 = [{ 'name' => 'john', 'age' => 1 }, { 'name' => 'alice', 'age' => 76 }]
    expect(highest_age(group1, group2)).to eq 'kay'
  end
end
