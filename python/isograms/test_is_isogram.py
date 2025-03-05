from is_isogram import is_isogram


class TestIsIsogram:
    def test_dermatoglyphics_is_true(self):
        assert is_isogram("Dermatoglyphics") is True

    def test_aba_is_false(self):
        assert is_isogram("aba") is False

    def test_moose_is_false(self):
        assert is_isogram("moOse") is False

    def test_isogram_is_true(self):
        assert is_isogram("isogram") is True

    def test_isisogram_is_false(self):
        assert is_isogram("isIsogram") is False

    def test_empty_string_is_true(self):
        assert is_isogram("") is True
