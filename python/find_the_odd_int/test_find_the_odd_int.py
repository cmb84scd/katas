from find_the_odd_int import find_it

class TestFindIt:

  def test_it_returns_seven(self):
    assert find_it([7]) == 7

  def test_it_returns_zero(self):
    assert find_it([0]) == 0

  def test_it_returns_two(self):
    assert find_it([1, 1, 2]) == 2

  def test_it_returns_zero_from_longer_array(self):
    assert find_it([0, 1, 0, 1, 0]) == 0

  def test_it_returns_four(self):
    assert find_it([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]) == 4
