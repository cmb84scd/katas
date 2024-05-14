## Efficient Power Modulo n

This is a Codewars 5kyu kata done in Python.

### Task

Your task is to create a new implementation of `modpow` so that it computes `(x^y)%n` for large `y`. The problem with the current implementation is that the output of `Math.pow` is so large on our inputs that it won't fit in a 64-bit float.

You're also going to need to be efficient, because we'll be testing some pretty big numbers.

A lot of things have been forbidden. Amidst others, don't:

- ...import things
- ...use eval, exec, compile, ... and a lot of things you'd use to cheat your way through the kata
- ...use the `int.__pow__` method

Due to these limitations, you cannot use any property or method (like, even `lst.append` is forbidden). But don't worry, you don't need this to solve the kata... ;)
