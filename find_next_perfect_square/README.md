## Find the next perfect square

This is a Codewars 7kyu kata done in Ruby.

### Task

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the `find_next_square` method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then `-1` should be returned. You may assume the parameter is positive.

```
Examples:

find_next_square(121) --> returns 144
find_next_square(625) --> returns 676
find_next_square(114) --> returns -1 since 114 is not a perfect
```
