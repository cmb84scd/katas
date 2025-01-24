from generate_hashtag import generate_hashtag

class TestGenerateHashtag:

  def test_empty_string_returns_false(self):
    assert generate_hashtag('') == False

  def test_string_longer_than_140_chars_returns_false(self):
    assert generate_hashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat') == False

  def test_one_word_string_returns_with_hash_in_front(self):
    assert generate_hashtag('Codewars') == '#Codewars'

  def test_removes_trailing_whitespace(self):
    assert generate_hashtag('Codewars      ') == '#Codewars'

  def test_removes_leading_whitespace(self):
    assert generate_hashtag('      Codewars') == '#Codewars'

  def test_removes_spaces(self):
    assert generate_hashtag('Codewars Is Nice') == '#CodewarsIsNice'

  def test_capitalizes_first_letter_of_each_word(self):
    assert generate_hashtag('codewars is nice') == '#CodewarsIsNice'

  def test_only_first_letter_of_each_word_is_capitalized(self):
    assert generate_hashtag('CoDeWaRs is niCe') == '#CodewarsIsNice'

  def test_a_single_letter_word_gets_capitalized(self):
    assert generate_hashtag('c i n') == '#CIN'

  def test_removes_unnecessary_middle_spaces(self):
    assert generate_hashtag('codewars  is  nice') == '#CodewarsIsNice'
