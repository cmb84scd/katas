from duplicate_count import duplicate_count


class TestDuplicateCount:
    def test_returns_zero_for_empty_string(self):
        assert duplicate_count("") == 0

    def test_returns_one_for_string_with_one_duplicate(self):
        assert duplicate_count("abcdeaa") == 1

    def test_returns_zero_for_string_with_no_duplicates(self):
        assert duplicate_count("abcde") == 0

    def test_returns_two_for_string_with_two_duplicates(self):
        assert duplicate_count("abcdeaB") == 2

    def test_returns_two_for_mixed_string_with_two_dups(self):
        assert duplicate_count("aA11") == 2
