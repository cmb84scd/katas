from power_modulo import power_mod

class TestPowerMod:

  def test_returns_three_from_basic_sum(self):
    assert power_mod(2, 3, 5) == 3

  def test_returns_one_from_basic_sum(self):
    assert power_mod(4, 12, 3) == 1

  def test_returns_one_from_more_complex_sum(self):
    assert power_mod(11, 10, 300) == 1

  def test_returns_thirty_two_from_complex_sum(self):
    assert power_mod(11, 100000, 49) == 32

  def test_returns_five_from_very_complex_sum(self):
    assert power_mod(5, 100000000, 19) == 5
