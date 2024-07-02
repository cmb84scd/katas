function solve(s) {
  let res = ''
  let op = 1
  let stack = [1]

  for (const x in s) {
    if (s[x] === '(') {
      stack.push(op)
    } else if (s[x] === ')') {
      stack.pop()
    } else if (s[x] === '+') {
      op = stack[stack.length - 1]
    } else if (s[x] === '-') {
      op = -stack[stack.length - 1]
    } else {
      if (res || op !== 1) {
        res += op === 1 ? '+' : '-'
      }
      res += s[x]
    }
  }

  return res
}
module.exports = solve;
