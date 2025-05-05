from split_string import solution


class TestSolution:
    def test_splits_short_even_string(self):
        assert solution("abcdef") == ["ab", "cd", "ef"]

    def test_splits_short_uneven_string(self):
        assert solution("abcdefg") == ["ab", "cd", "ef", "g_"]

    def test_returns_empty_list_for_empty_string(self):
        assert solution("") == []
