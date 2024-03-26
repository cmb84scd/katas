from find_duplicate import find_dup

class TestFindDup:

  def test_find_dup_returns_one(self):
    assert find_dup([1,1,2,3]) == 1

  def test_find_dup_returns_two(self):
    assert find_dup([1,2,2,3]) == 2

  def test_find_dup_returns_five(self):
    assert find_dup([1,3,2,5,4,5,7,6]) == 5

  def test_find_dup_returns_nine(self):
    assert find_dup([8,2,6,3,7,9,5,1,4,9]) == 9
