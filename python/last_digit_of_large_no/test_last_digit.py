from last_digit import last_digit

class TestLastDigit:

  def test_return_four_from_simple_calc(self):
    assert last_digit(4, 1) == 4

  def test_return_six_from_simple_calc(self):
    assert last_digit(4, 2) == 6

  def test_return_nine_from_more_complex_calc(self):
    assert last_digit(9, 7) == 9

  def test_return_zero_from_complex_calc(self):
    assert last_digit(10, 10 ** 10) == 0

  def test_return_six_from_very_complex_calc(self):
    assert last_digit(2 ** 200, 2 ** 300) == 6

  def test_return_one_when_second_num_is_zero(self):
    assert last_digit(0, 0) == 1
