require 'regexp_basics'

describe String do
  describe '#digit?' do
    it 'returns true if 4 is a digit' do
      expect('4'.digit?).to be true
    end

    it 'returns false if 14 is not a digit' do
      expect('14'.digit?).to be false
    end

    it 'returns false if abc is not a digit' do
      expect('abc'.digit?).to be false
    end

    it 'returns false if " " is not a digit' do
      expect(' '.digit?).to be false
    end
  end
end
