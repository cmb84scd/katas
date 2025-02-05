from solution import unusual_sort


class TestUnusualSort:
    def test_sort_strings(self):
        assert unusual_sort(["a", "z", "b"]) == ["a", "b", "z"]

    def test_sort_integers(self):
        assert unusual_sort([1, 3, 2]) == [1, 2, 3]

    def test_sort_strings_of_letters_and_numbers(self):
        assert unusual_sort(["1", "z", "a"]) == ["a", "z", "1"]

    def test_sort_upper_and_lower_case_letters(self):
        assert unusual_sort(["1", "Z", "a"]) == ["Z", "a", "1"]

    def test_sort_letters_and_integers(self):
        assert unusual_sort([3, 2, 1, "a", "z", "b"]) == ["a", "b", "z", 1, 2, 3]

    def test_sort_integers_and_string_numbers(self):
        assert unusual_sort([3, "2", 1, "1", "3", 2]) == [1, "1", 2, "2", 3, "3"]

    def test_sort_very_mixed_list(self):
        assert unusual_sort([3, "2", 1, "a", "c", "b"]) == ["a", "b", "c", 1, "2", 3]

    def test_sort_mixed_list_with_duplicates(self):
        assert (
            unusual_sort([3, "3", "2", 2, "2", "1", 1, "a", "b", "c"])
            == ["a", "b", "c", 1, "1", 2, "2", "2", 3, "3"]
        )

    def test_sort_mixed_list_with_two_duplicates(self):
        assert (
            unusual_sort(['C', '4', 4, 7, 0, 7, 'T', 'N', 'I', 1])
            == ['C', 'I', 'N', 'T', 0, 1, 4, '4', 7, 7]
        )
