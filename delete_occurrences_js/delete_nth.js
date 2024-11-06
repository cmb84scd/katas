function deleteNth(arr, n) {
  const elementDict = {}
  let result = []

  arr.forEach(e => {
    if (elementDict[e] < n) {
      elementDict[e]++
      result.push(e)
    } else if (!(e in elementDict)) {
      elementDict[e] = 1
      result.push(e)
    }
  })

  return result
}
module.exports = deleteNth;
