function deleteNth(arr, n) {
  let result = []

  arr.forEach(e => {
    if (result.filter(i => i === e).length < n) {
      result.push(e)
    }
  })

  return result
}
module.exports = deleteNth;
