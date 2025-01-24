require 'is_infinite_process'

describe '#is_infinite_process' do
  it 'returns false' do
    expect(is_infinite_process(2, 6)).to be false
  end

  it 'returns true' do
    expect(is_infinite_process(2, 3)).to be true
  end

  it 'returns true' do
    expect(is_infinite_process(3, 1)).to be true
  end
end
