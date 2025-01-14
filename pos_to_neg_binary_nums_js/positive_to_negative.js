function positiveToNegative(b) {
  zero_count = b.filter(x => x === 0).length
  if (zero_count === b.length) {
    return b
  }

  let onesComplement = ''
  b.forEach(e => {
    onesComplement += e === 0 ? '1' : '0'
  })

  let twosComplement = (parseInt(onesComplement, 2) + 1).toString(2)
  return twosComplement.split('').map(e => Number(e))
}
module.exports = positiveToNegative;
