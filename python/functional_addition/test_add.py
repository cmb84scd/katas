from add import add


class TestAdd:
    def test_add_one_and_three(self):
        assert add(1)(3) == 4

    def test_add_with_negative_number(self):
        assert add(0)(-15) == -15

    def test_add_five_to_new_function(self):
        add_three = add(3)
        assert add_three(5) == 8
