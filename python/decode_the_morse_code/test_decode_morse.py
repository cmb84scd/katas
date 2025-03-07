from decode_morse import decode_morse


class TestDecodeMorse:
    def test_returns_hey_jude(self):
        assert decode_morse(".... . -.--   .--- ..- -.. .") == "HEY JUDE"

    def test_returns_sos_when_morse_has_no_spaces(self):
        assert decode_morse("...---...") == "SOS"

    def test_returns_s_o_s(self):
        assert decode_morse("...   ---   ...") == "S O S"

    def test_handles_more_complex_morse_code(self):
        assert (
            decode_morse(
                "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
            )
            == "SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
        )
