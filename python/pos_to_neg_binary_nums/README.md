## Positive to negative binary numbers

This is a Codewars 7kyu kata done in Python.

### Task

Given an array of ones and zero(e)s that represents a positive binary number, convert the number to two's complement value.

Two's complement is the way most computers represent positive or negative integers. The most significant bit is `1` if the number is negative, and `0` otherwise.

Examples:

[1,1,1,1] = -1

[1,0,0,0] = -8

[1,1,0,1] = -3

To get the two's complement negative notation of an integer, you take the number in binary.

You then flip the bits, and add one (with carry) to the result.

For example:

[0,0,1,0] = 2 in base 10

[1,1,0,1] <- Flip the bits

Add 1 (with carry):

[1,1,1,0] = -2

The output array must have the same length as the input array.
