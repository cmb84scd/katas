from next_smaller import next_smaller


class TestNextSmaller:
    def test_return_twelve(self):
        assert next_smaller(21) == 12

    def test_return_five_one_three(self):
        assert next_smaller(531) == 513

    def test_return_two_zero_one_seven(self):
        assert next_smaller(2071) == 2017

    def test_return_minus_one_for_single_digit_num(self):
        assert next_smaller(9) == -1

    def test_handle_three_digit_num_smallest_combination(self):
        assert next_smaller(135) == -1

    def test_handle_four_digit_num_smallest_combination(self):
        assert next_smaller(1027) == -1

    def test_very_large_number(self):
        assert next_smaller(59884848483559) == 59884848459853
