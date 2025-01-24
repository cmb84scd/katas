require 'unpacking_args'

describe '#spread' do
  it 'returns 3' do
    expect(spread(->(x, y) { x + y }, [1, 2])).to eq 3
  end

  it 'returns 12' do
    expect(spread(->(x, y) { x * y }, [3, 4])).to eq 12
  end
end
