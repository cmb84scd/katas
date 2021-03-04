import unittest
from ten_min_walk import is_valid_walk

class TestIsValidWalk(unittest.TestCase):

  def test_walk_not_long_enough(self):
    self.assertFalse(is_valid_walk(['w', 's']))

  def test_valid_walk(self):
    self.assertTrue(is_valid_walk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']))

  def test_walk_is_too_long(self):
    self.assertFalse(is_valid_walk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))

  def test_walk_is_invalid(self):
    self.assertFalse(is_valid_walk(['e', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']))
