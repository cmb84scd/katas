require 'guess_the_number'

describe Guesser do
  let(:guesser) { Guesser.new(10, 2) }

  describe 'guess' do
    it 'guesses the correct number' do
      expect(guesser.guess(10)).to be true
    end

    it 'guesses the wrong number' do
      expect(guesser.guess(5)).to be false
    end

    it 'reduces the lives on a wrong guess' do
      guesser.guess(5)
      expect(guesser.lives).to eq 1
    end

    it 'raises error if lives are zero' do
      guesser.guess(5)
      guesser.guess(5)
      expect { guesser.guess(5) }.to raise_error("Omae wa mo shindeiru")
    end
  end
end
