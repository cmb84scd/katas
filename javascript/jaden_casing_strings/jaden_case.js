/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
module.exports = String.prototype.toJadenCase;
