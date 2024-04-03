function generateHashtag(str) {
  const words = str.toLowerCase().split(' ')
  const formattedStr = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('')

  if (formattedStr.length === 0 || formattedStr.length > 139) {
    return false
  }

  return `#${formattedStr}`
}
module.exports = generateHashtag;
