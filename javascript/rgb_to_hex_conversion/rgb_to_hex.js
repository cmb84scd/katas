function rgb(r, g, b) {
  return [r, g, b].map((x) => {
    if (x > 255) return 'FF'
    if (x < 0) return '00'
    return x.toString(16).toUpperCase().padStart(2, '0')
  }).join('')
}
module.exports = rgb;
