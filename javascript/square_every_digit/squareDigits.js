function squareDigits(num){
  let arr = num.toString().split('').map(Number).map((x) => {
    return Math.pow(x, 2)
  })
  return Number(arr.join(''))
}
module.exports = squareDigits;
