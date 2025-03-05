function isIsogram(str) {
  return str.length === new Set(str.toLowerCase()).size
}

// Below is my original answer and above is my rafactored one

// function isIsogram(str) {
//   if (str.length === new Set(str.toLowerCase()).size) {
//     return true
//   }

//   return false
// }
module.exports = isIsogram;
