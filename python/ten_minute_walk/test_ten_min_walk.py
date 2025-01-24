from ten_min_walk import is_valid_walk

class TestIsValidWalk:

  def test_walk_not_long_enough(self):
    assert is_valid_walk(['w', 's']) is False

  def test_valid_walk(self):
    assert is_valid_walk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) is True

  def test_walk_is_too_long(self):
    assert is_valid_walk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']) is False

  def test_walk_is_invalid(self):
    assert is_valid_walk(['e', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) is False
