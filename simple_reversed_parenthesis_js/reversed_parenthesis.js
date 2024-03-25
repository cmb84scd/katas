function solve(s) {
  if (s.length % 2 !== 0) {
    return -1
  }

  while (s.includes('()')) {
    s = s.replace('()', '')
  }

  l = 0
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(') {
      l += 1;
    }
  }

  return Math.ceil(l / 2) + Math.ceil((s.length - l) / 2)
}
module.exports = solve;
