function nextSmaller(n) {
  const numArr = Array.from(String(n), Number)
  const sortedArr = Array.from(String(n), Number).sort()

  if (numArr.join('') === sortedArr.join('')) return -1

  let i, prev = 9
  for (i = numArr.length; i--;) {
    if (numArr[i] > prev) break
    prev = numArr[i]
  }

  const pivotI = i
  const pivot = numArr[pivotI]

  for (i = numArr.length; i--;) {
    if (numArr[i] < pivot) break
  }

  numArr[pivotI] = numArr[i]
  numArr[i] = pivot

  if (numArr[0] === 0) return -1

  return +numArr.slice(0, pivotI + 1).concat(numArr.slice(pivotI + 1).reverse()).join('')
}
module.exports = nextSmaller;
