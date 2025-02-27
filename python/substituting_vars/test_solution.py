from solution import solution


class TestSolution:
    def test_handles_one_digit_number(self):
        assert solution(5) == "Value is 00005"

    def test_handles_two_digit_number(self):
        assert solution(12) == "Value is 00012"

    def test_handles_three_digit_number(self):
        assert solution(109) == "Value is 00109"

    def test_handles_four_digit_number(self):
        assert solution(1204) == "Value is 01204"

    def test_handles_five_digit_number(self):
        assert solution(12345) == "Value is 12345"
