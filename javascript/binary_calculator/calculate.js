function calculate(n1, n2, o) {
  switch (o) {
    case 'add':
      return (parseInt(n1, 2) + parseInt(n2, 2)).toString(2)
    case 'subtract':
      return (parseInt(n1, 2) - parseInt(n2, 2)).toString(2)
    case 'multiply':
      return (parseInt(n1, 2) * parseInt(n2, 2)).toString(2)
  }
}
module.exports = calculate;
