function add(n) {
  return function (m) {
    return n + m
  }
}
module.exports = add;
