from first_non_repeating_char import first_non_repeating_letter

class TestFirstNonRepeatingLetter:

  def test_returns_t_from_simple_word(self):
    assert first_non_repeating_letter('stress') == 't'

  def test_handles_a_single_letter_word(self):
    assert first_non_repeating_letter('a') == 'a'

  def test_handles_empty_strings(self):
    assert first_non_repeating_letter('') == ''

  def test_handles_words_with_no_unique_chars(self):
    assert first_non_repeating_letter('abba') == ''

  def test_handles_exotic_chars(self):
    assert first_non_repeating_letter('~><#~><') == '#'

  def test_handles_letter_case_correctly(self):
    assert first_non_repeating_letter('sTreSS') == 'T'

  def test_also_handles_letter_case(self):
    assert first_non_repeating_letter('Go hang a salami, I\'m a lasagna hog!') ==','
