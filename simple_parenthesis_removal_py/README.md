## Simple parenthesis removal

This is a Codewars 5kyu kata done in Python.

### Task

In this Kata, you will be given a expression string and your task will be to remove all braces as follows:

```text
solve("x-(y+z)") = "x-y-z"
solve("x-(y-z)") = "x-y+z"
solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
solve("x-(-y-z)") = "x+y+z"
```

There are no spaces in the expression. Only two operators are given: `"+" or "-"`.

More examples in test cases.

Good luck!
