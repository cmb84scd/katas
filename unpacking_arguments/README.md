## Unpacking Arguments

This is a Codewars 7kyu kata done in Ruby.

### Task

You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

```text
spread someFunction, [1, true, "Foo", "bar"]
# is the same as...
someFunction.(1, true, "Foo", "bar")
```
