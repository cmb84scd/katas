from highest_score import high


class TestHigh:
    def test_returns_taxi(self):
        assert high("man i need a taxi up to ubud") == "taxi"

    def test_returns_volcano(self):
        assert high("what time are we climbing up the volcano") == "volcano"

    def test_returns_semynak(self):
        assert high("take me to semynak") == "semynak"

    def test_returns_aa(self):
        assert high("aa b") == "aa"

    def test_returns_b(self):
        assert high("b aa") == "b"
