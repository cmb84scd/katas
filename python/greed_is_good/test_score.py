from score import score

class TestScore:

  def test_score_returns_two_fifty(self):
    assert score([5, 1, 3, 4, 1]) == 250

  def test_score_returns_one_thousand_one_hundred(self):
    assert score([1, 1, 1, 3, 1]) == 1100

  def test_score_returns_zero_when_no_rules_matched(self):
    assert score([2, 3, 4, 6, 2]) == 0

  def test_score_returns_four_hundred(self):
    assert score([4, 4, 4, 3, 3]) == 400

  def test_score_returns_four_fifty(self):
    assert score([2, 4, 4, 5, 4]) == 450
