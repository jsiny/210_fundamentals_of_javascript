var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function stringToSignedInteger(string) {
  var stringDigits = string.replace(/[^\d]/, '').split('');
  var isPositive = true;
  var integer = 0;
  
  if (string.startsWith('-')) isPositive = false;

  stringDigits.forEach(n => {
    integer = integer * 10 + DIGITS.indexOf(n);
  })

  return (isPositive ? integer : - integer);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100