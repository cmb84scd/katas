from calculate import calculate


class TestCalculate:
    def test_add_binary_numbers(self):
        assert calculate("1", "1", "add") == "10"

    def test_subtract_binary_numbers(self):
        assert calculate("1", "10", "subtract") == "-1"

    def test_multiply_binary_numbers(self):
        assert calculate("1", "1", "multiply") == "1"
