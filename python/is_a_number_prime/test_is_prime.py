from is_prime import is_prime


class TestIsPrime:
    def test_returns_false_for_one(self):
        assert is_prime(1) is False

    def test_returns_true_for_two(self):
        assert is_prime(2) is True

    def test_returns_false_for_negative_numbers(self):
        assert is_prime(-1) is False
