function solution(str) {
  if (str === '') {
    return []
  }

  let res = []
  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1] === undefined) {
      res.push(str[i] + '_')
    } else {
      res.push(str[i] + str[i + 1])
    }
  }

  return res
}
module.exports = solution;
