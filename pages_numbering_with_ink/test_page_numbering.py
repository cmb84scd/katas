from page_numbering import pages_numbering_with_ink

class TestPagesNumberingWithInk:

  def test_last_page_printed_is_5(self):
    assert pages_numbering_with_ink(1, 5) == 5

  def test_last_page_printed_is_22(self):
    assert pages_numbering_with_ink(21, 5) == 22

  def test_last_page_printed_is_10(self):
    assert pages_numbering_with_ink(8, 4) == 10

  def test_last_page_printed_is_23(self):
    assert pages_numbering_with_ink(21 ,6) == 23

  def test_last_page_printed_is_166(self):
    assert pages_numbering_with_ink(76,250) == 166

  def test_last_page_printed_is_419(self):
    assert pages_numbering_with_ink(80,1000) == 419
