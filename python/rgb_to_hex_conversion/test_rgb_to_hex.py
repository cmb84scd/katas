from rgb_to_hex import rgb


class TestRGB:
    def test_rgb_with_zeros(self):
        assert rgb(0, 0, 0) == "000000"

    def test_rgb_with_255(self):
        assert rgb(255, 255, 255) == "FFFFFF"

    def test_rgb_with_123(self):
        assert rgb(1, 2, 3) == "010203"

    def test_rgb_with_a_negative_number(self):
        assert rgb(-20, 255, 125) == "00FF7D"

    def test_rgb_with_number_over_255(self):
        assert rgb(-20, 275, 125) == "00FF7D"

    def test_rgb_with_out_of_range_numbers(self):
        assert rgb(300, -75, -20) == "FF0000"
