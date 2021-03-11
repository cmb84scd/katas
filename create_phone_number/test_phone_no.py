import unittest
from phone_no import create_phone_number

class TestCreatePhoneNumber(unittest.TestCase):

  def test_first_phone_number_created(self):
    self.assertEqual(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
  
  def test_second_phone_number_created(self):
    self.assertEqual(create_phone_number([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")

  def test_third_phone_number_created(self):
    self.assertEqual(create_phone_number([0, 2, 3, 0, 5, 6, 0, 8, 9, 0]), "(023) 056-0890")