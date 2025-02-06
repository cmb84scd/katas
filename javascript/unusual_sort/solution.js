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


// The above is my version and the below is a one line alternative
// function unusualSort(arrayOfChars) {
//   const sorted = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,'0',1,'1',2,'2',3,'3',4,'4',5,'5',6,'6',7,'7',8,'8',9,'9'];
//   return arrayOfChars.sort((a,b)=>sorted.indexOf(a) - sorted.indexOf(b));
// }
