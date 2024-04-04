from readable_time import make_readable

class TestMakeReadable:

  def test_zero_seconds_returns_zero_time(self):
    assert make_readable(0) == '00:00:00'

  def test_fifty_nine_seconds_returns_correct_time(self):
    assert make_readable(59) == '00:00:59'

  def test_sixty_seconds_returns_one_minute(seconds):
    assert make_readable(60) == '00:01:00'

  def test_three_five_nine_nine_returns_correct_time(self):
    assert make_readable(3599) == '00:59:59'

  def test_three_six_zero_zero_returns_one_hour(self):
    assert make_readable(3600) == '01:00:00'

  def test_one_second_short_of_a_day_returned(self):
    assert make_readable(86399) == '23:59:59'

  def test_twenty_four_hours_is_returned(self):
    assert make_readable(86400) == '24:00:00'

  def test_max_seconds_returns_max_time(self):
    assert make_readable(359999) == '99:59:59'
