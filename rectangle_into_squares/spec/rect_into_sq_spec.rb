require 'rect_into_sq'

describe '#sq_in_rect' do
  it 'returns nil' do
    expect(sq_in_rect(5, 5)).to eq nil
  end

  it 'returns an array of smaller squares' do
    expect(sq_in_rect(5, 3)).to eq [3, 2, 1, 1]
  end

  it 'returns an array when lng is shorter' do
    expect(sq_in_rect(3, 5)).to eq [3, 2, 1, 1]
  end

  it 'returns another array of squares' do
    expect(sq_in_rect(20, 14)).to eq [14, 6, 6, 2, 2, 2]
  end
end
