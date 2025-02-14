from solution import next_prime


class TestNextPrime:
    def test_returns_two_when_passed_zero(self):
        assert next_prime(0) == 2

    def test_returns_three_when_passed_two(self):
        assert next_prime(2) == 3

    def test_returns_five_when_passed_three(self):
        assert next_prime(3) == 5

    def test_returns_seventeen_when_passed_thirteen(self):
        assert next_prime(13) == 17

    def test_handles_low_three_digit_numbers(self):
        assert next_prime(181) == 191

    def test_handles_high_three_digit_numbers(self):
        assert next_prime(911) == 919
