from mirror import mirror


class TestMirror:
    def test_returns_empty_list_when_given_empty_list(self):
        assert mirror([]) == []

    def test_returns_list_with_one_element_when_given_one_element_list(self):
        assert mirror([1]) == [1]

    def test_returns_mirrored_list_when_given_two_element_list(self):
        assert mirror([2, 1]) == [1, 2, 1]

    def test_returns_mirrored_list_when_given_three_element_list(self):
        assert mirror([1, 3, 2]) == [1, 2, 3, 2, 1]
