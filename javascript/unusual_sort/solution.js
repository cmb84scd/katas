function unusualSort(arrayOfChars) {
  let numList = []
  let strList = []

  if (arrayOfChars.every((char) => Number.isInteger(char))) {
    return arrayOfChars.sort()
  }

  for (let i in arrayOfChars) {
    if (isNaN(arrayOfChars[i])) {
      strList.push(arrayOfChars[i])
    } else {
      numList.push(arrayOfChars[i])
    }
  }

  numList.sort()
  strList.sort()

  for (let i = 0; i < numList.length - 1; i++) {
    if (typeof numList[i] === 'string') {
      if (Number(numList[i]) === Number(numList[i + 1])) {
        [numList[i], numList[i + 1]] = [numList[i + 1], numList[i]]
      }
    }
  }

  return strList.concat(numList)
}
module.exports = unusualSort;
