class Guesser
  attr_reader :lives

  def initialize(number, lives)
    @number = number
    @lives = lives
  end

  def guess(num)
    fail "Omae wa mo shindeiru" if @lives.zero?

    if num == @number
      true
    else
      @lives -= 1
      false
    end
  end
end
