from part_list import partlist


class TestPartList:
    def test_handles_two_element_list(self):
        assert partlist(["I", "wish"]) == [("I", "wish")]

    def test_handles_three_element_list(self):
        assert partlist(["I", "wish", "I"]) == [("I", "wish I"), ("I wish", "I")]

    def test_handles_four_element_list(self):
        assert partlist(["I", "wish", "I", "hadn't"]) == [
            ("I", "wish I hadn't"),
            ("I wish", "I hadn't"),
            ("I wish I", "hadn't"),
        ]

    def test_handles_five_element_list(self):
        assert partlist(["I", "wish", "I", "hadn't", "come"]) == [
            ("I", "wish I hadn't come"),
            ("I wish", "I hadn't come"),
            ("I wish I", "hadn't come"),
            ("I wish I hadn't", "come"),
        ]
