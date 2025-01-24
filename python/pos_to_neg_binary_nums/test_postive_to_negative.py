from positive_to_negative import positive_to_negative


class TestPostiveToNegative:
    def test_binary_ten_becomes_negative(self):
        assert positive_to_negative([0, 0, 1, 0]) == [1, 1, 1, 0]

    def test_binary_eleven_becomes_negative(self):
        assert positive_to_negative([0, 0, 1, 1]) == [1, 1, 0, 1]

    def test_return_input_if_it_contains_just_zeros(self):
        assert positive_to_negative([0, 0, 0, 0]) == [0, 0, 0, 0]

    def test_handles_larger_than_four_bit_binary(self):
        assert positive_to_negative([0, 1, 0, 0, 1]) == [1, 0, 1, 1, 1]
