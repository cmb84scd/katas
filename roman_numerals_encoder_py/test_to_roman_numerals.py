from to_roman_numerals import solution

class TestSolution:

  def test_returns_I_for_one(self):
    assert solution(1) =='I'

  def test_returns_IV_for_four(self):
    assert solution(4) == 'IV'

  def test_returns_XIV_for_fourteen(self):
    assert solution(14) == 'XIV'

  def test_returns_XXI_for_twenty_one(self):
    assert solution(21) == 'XXI'

  def test_returns_CMLXXXIV_for_nine_eighty_four(self):
    assert solution(984) == 'CMLXXXIV'

  def test_returns_MDCCCLXXXIX_for_one_eight_eight_nine(self):
    assert solution(1889) == 'MDCCCLXXXIX'
