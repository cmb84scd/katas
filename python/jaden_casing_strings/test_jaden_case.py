from jaden_case import to_jaden_case


class TestToJadenCase:
    def test_it_returns_a_capitalised_string(self):
        assert (
            to_jaden_case("How can mirrors be real if our eyes aren't real")
            == "How Can Mirrors Be Real If Our Eyes Aren't Real"
        )
