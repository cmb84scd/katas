function createPhoneNumber(numbers) {
  const str1 = numbers.slice(0, 3).join('')
  const str2 = numbers.slice(3, 6).join('')
  const str3 = numbers.slice(6).join('')
  return `(${str1}) ${str2}-${str3}`
}
module.exports = createPhoneNumber;
