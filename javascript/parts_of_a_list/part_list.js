function partlist(arr) {
  return arr.map((_, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
}
module.exports = partlist;
