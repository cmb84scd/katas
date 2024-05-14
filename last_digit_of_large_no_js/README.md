## Last digit of a large number

This is a Codewars 5kyu kata done in JavaScript.

### Task

Define a function that takes in two non-negative integers `a` and `b` and returns the last decimal digit of $a^b$. Note that a and b may be very large!

For example, the last decimal digit of $9^7$ is 9, since $9^7$ = 4782969. The last decimal digit of `(2**200)**(2**300)`, which has over `10**92` decimal digits, is `6`. Also, please take $0^0$ to be 1.

You may assume that the input will always be valid.

Examples
```
lastDigit(4, 1)                # returns 4
lastDigit(4, 2)                # returns 6
lastDigit(9, 7)                # returns 9
lastDigit(10, 10 ** 10)        # returns 0
lastDigit(2 ** 200, 2 ** 300)  # returns 6
```

### Notes

I found the first answer of this [question](https://www.quora.com/How-do-you-calculate-the-2-last-digits-of-a-number-of-the-form-a-b-where-both-numbers-are-very-large) on Quora very helpful for solving this Kata.

Interestingly, my refactored solution didn't pass all the tests on codewars so I've put it back to how it was. However, it was still good learning nonetheless.
