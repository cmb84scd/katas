require 'unexpected_parsing'

describe '#get_status' do
  it 'returns busy' do
    expect(get_status(true)).to eq 'status' => 'busy'
  end

  it 'returns available' do
    expect(get_status(false)).to eq 'status' => 'available'
  end
end
