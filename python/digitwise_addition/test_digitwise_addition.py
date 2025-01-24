from digitwise_addition import digitwise_addition


class TestDigitwiseAddition:
    def test_returns_six(self):
        assert digitwise_addition(9812, 2) == 6

    def test_returns_eight(self):
        assert digitwise_addition(9899, 3) == 8
