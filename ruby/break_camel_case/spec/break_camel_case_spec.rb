require 'break_camel_case'

describe '#solution' do
  it 'returns camel Casing' do
    expect(solution('camelCasing')).to eq 'camel Casing'
  end

  it 'returns camel Casing Test' do
    expect(solution('camelCasingTest')).to eq 'camel Casing Test'
  end
end
