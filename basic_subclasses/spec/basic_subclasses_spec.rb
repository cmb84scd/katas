require 'basic_subclasses'

describe Human do

end

describe Man do

end

describe Woman do

end

describe '#god' do
  it 'creates adam' do
    expect(god.first.instance_of?(Man)).to be true
  end

  it 'creates eve' do
    expect(god.last.instance_of?(Woman)).to be true
  end
end
