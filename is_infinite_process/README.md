## Simple Fun 6: Is Infinite Process?

This is a Codewars 7kyu kata done in Ruby.

### Task

Given integers `a` and `b`, determine whether the following pseudocode results in an infinite loop

 ```
while a != b do
  a += 1
  b -= 1
end
 ```
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

#### Example

For a = 2 and b = 6, the output should be:<br>
`isInfiniteProcess(a, b) = false`

For a = 2 and b = 3, the output should be:<br>
`isInfiniteProcess(a, b) = true`

#### Input/Output

- `[input]` integer `a`<br>
  Constraints: 0 ≤ a ≤ 100.

- `[input]` integer `b`<br>
  Constraints: 0 ≤ b ≤ 100.

- `[output]` a boolean value<br>
  true if the pseudocode will never stop, false otherwise.
