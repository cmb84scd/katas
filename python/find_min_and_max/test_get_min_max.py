from get_min_max import get_min_max


class TestGetMinMax:
    def test_returns_number_twice_for_one_element_list(self):
        assert get_min_max([1]) == (1, 1)

    def test_returns_min_and_max_for_two_element_list(self):
        assert get_min_max([1, 2]) == (1, 2)

    def test_handles_unsorted_list(self):
        assert get_min_max([3, 1, 2]) == (1, 3)
