## Efficient Power Modulo n

This is a Codewars 5kyu kata done in javaScript.

### Task

Your task is to create a new implementation of `modpow` so that it computes `(x^y)%n` for large `y`. The problem with the current implementation is that the output of `Math.pow` is so large on our inputs that it won't fit in a 64-bit float.

You're also going to need to be efficient, because we'll be testing some pretty big numbers.
