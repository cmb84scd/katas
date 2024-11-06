from delete_nth import delete_nth


class TestDeleteNth:
    def test_remove_one_extra_duplication(self):
        assert delete_nth([20, 37, 20, 21], 1) == [20, 37, 21]

    def test_remove_two_extra_duplications(self):
        assert delete_nth([1, 1, 3, 3, 7, 2, 2, 2, 2], 2) == [1, 1, 3, 3, 7, 2, 2]

    def test_remove_multiple_extra_duplications(self):
        assert delete_nth([1, 2, 3, 1, 2, 1, 2, 3], 2) == [1, 2, 3, 1, 2, 3]
