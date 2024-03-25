from reversed_parenthesis import solve

class TestReversedParenthesis:

  def test_odd_number_of_parenthesis(self):
    assert solve('(((') == -1

  def test_2_reversals_required(self):
    assert solve(')(') == 2

  def test_1_reversal_required(self):
    assert solve('(((())') == 1

  def test_3_reversals_required(self):
    assert solve('())(((') == 3

  def test_4_reversals_required(self):
    assert solve('())()))))()()(') == 4
