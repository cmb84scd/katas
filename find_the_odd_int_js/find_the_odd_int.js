function findOdd(arr) {
  for (let i in arr) {
    const occ = arr.filter((v) => (v === arr[i])).length
    if (occ % 2 !== 0) {
      return arr[i]
    }
  }
}
module.exports = findOdd;
