## Pages numbering with ink

This is a Codewars 7kyu kata done in Python.

### Task

You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink.

Now you want to write a function to determine what the last page of the book is that you can number given the `current page` and `number_of_digits` left.

A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

It's guaranteed that you can number the current page, and that you can't number the last one in the book.

Example:
```
For current = 1 and number_of_digits = 5, the output should be 5, with numbers 1, 2, 3, 4, 5 printed.
```
```
For current = 21 and number_of_digits = 5, the output should be 22, with numbers 21, 22 printed.
```
```
For current = 8 and number_of_digits = 4, the output should be 10, with numbers 8, 9, 10 printed.
```

Input/Output:
```
[input] integer current = A positive integer, the number on the current page which is not yet printed.

Constraints: 1 ≤ current ≤ 1000
```
```
[input] integer number_of_digits = A positive integer, the number of digits which your printer can print.

Constraints: 1 ≤ number_of_digits ≤ 1000
```
```
[output] an integer = The last printed page number.
```
