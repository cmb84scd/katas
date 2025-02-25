from play_pass import play_pass


class TestPlayPass:
    def test_simple_phrase(self):
        assert play_pass("I LOVE YOU!!!", 1) == "!!!vPz fWpM J"

    def test_phrase_with_the_letter_z(self):
        assert play_pass("!!!VPZ FWPM J", 25) == "I LoVe yOu!!!"

    def test_simple_letters_and_numbers_phrase(self):
        assert play_pass("AZ12345678ZA", 1) == "bA12345678aB"

    def test_one_word_phrase_with_just_letters(self):
        assert play_pass("AAABBCCY", 1) == "zDdCcBbB"

    def test_long_phrase_with_letters_and_numbers(self):
        assert (
            play_pass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)
            == "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
        )
