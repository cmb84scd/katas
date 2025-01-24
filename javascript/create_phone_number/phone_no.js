function createPhoneNumber(numbers) {
  /*
  p = phone number. This is the string and for reduce() is the accumulator.
  e = element in array.
  */
  return numbers.reduce((p, e) => p.replace('x', e), "(xxx) xxx-xxxx")
}
module.exports = createPhoneNumber;
