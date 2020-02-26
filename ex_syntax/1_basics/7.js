var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function stringToInteger(string) {
  var stringDigits = string.split('');
  var integer = 0;

  stringDigits.forEach(n => {
    integer *= 10;
    integer += DIGITS.indexOf(n);
  })

  return integer;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570