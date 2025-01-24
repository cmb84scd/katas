## Rectangle into Squares

This is a Codewars 6kyu kata done in Ruby.

### Task

The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

![rectangle](https://user-images.githubusercontent.com/61843502/93897305-d1766c00-fce9-11ea-8405-9d61c28be169.jpg)

Can you translate this drawing into an algorithm?

You will be given two dimensions

1. a positive integer length (parameter named lng)
2. a positive integer width (parameter named wdth)

You will return an array with the size of each of the squares.

```text
  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
```

Notes:
lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with `lng != wdth`.

When the initial parameters are so that `lng == wdth`, the solution `[lng]` would be the most obvious but not in the spirit of this kata so, in that case, return `nil`
