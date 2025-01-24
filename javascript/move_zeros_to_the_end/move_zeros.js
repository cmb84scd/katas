function moveZeros(arr) {
  for (const x in arr) {
    if (arr[x] === 0) {
      arr.splice(arr.indexOf(arr[x]), 1)
      arr.push(0)
    }
  }
  return arr
}
module.exports = moveZeros;
