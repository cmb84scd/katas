function findOdd(arr) {
  return arr.find((num) => arr.filter((n) => num === n).length % 2)
}
module.exports = findOdd;
