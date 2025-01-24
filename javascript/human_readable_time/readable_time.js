function humanReadable(seconds) {
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const secs = String(Math.floor(seconds % 60)).padStart(2, '0')
  return `${hrs}:${mins}:${secs}`.padStart(2, '0')
}
module.exports = humanReadable;
