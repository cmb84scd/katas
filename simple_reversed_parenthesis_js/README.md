## Simple reversed parenthesis

This is a Codewars 6kyu kata done in JavaScript.

### Task

Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

For example:

```text
solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals.
solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
```

Parenthesis will be either `"("` or `")"`.
