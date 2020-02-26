var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  var string = '';

  do {
    string = DIGITS[num % 10] + string;
    num = Math.floor(num / 10);
  } while (num > 0)

  return string;
}

function signedIntegerToString(num) {
  if (num < 0) {
    return ('-' + integerToString(- num))
  } else if (num > 0) {
    return ('+' + integerToString(num))
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"