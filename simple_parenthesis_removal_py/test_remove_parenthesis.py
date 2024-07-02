from remove_parenthesis import solve


class TestSolve:
    def test_returns_simple_minus_expression(test):
        assert solve("a-(b)") == "a-b"

    def test_returns_simple_plus_expression(test):
        assert solve("a+(b)") == "a+b"

    def test_returns_minus_minus_expression(test):
        assert solve("x-(y+z)") == "x-y-z"

    def test_returns_minus_plus_expression(test):
        assert solve("x-(y-z)") == "x-y+z"

    def test_returns_minus_triple_plus_minus_expression(test):
        assert solve("u-(v-w-(x+y))-z") == "u-v+w+x+y-z"

    def test_handles_double_minus_expression(test):
        assert solve("x-(-y-z)") == "x+y+z"

    def test_handles_plus_minus_expression(test):
        assert solve("a+(-b)") == "a-b"

    def test_handles_double_minus_at_start(test):
        assert solve("-(-(x-y))") == "x-y"

    def test_handles_multiple_parenthesis(self):
        assert solve("(((((((((-((-(((n))))))))))))))") == "n"

    def test_returns_alt_plus_and_minus(self):
        assert solve("q+(s-(x-o))-(t-(w-a))") == "q+s-x+o-t+w-a"
