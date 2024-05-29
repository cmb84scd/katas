from move_zeros import move_zeros

class TestMoveZeros:

  def test_moves_one_zero_to_the_end(self):
    assert move_zeros([1, 0, 1, 2, 1, 3]) == [1, 1, 2, 1, 3, 0]

  def test_moves_two_zeros_to_the_end(self):
    assert move_zeros([1, 0, 1, 2, 0, 1, 3]) == [1, 1, 2, 1, 3, 0, 0]
