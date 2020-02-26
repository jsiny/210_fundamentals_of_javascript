var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  var string = '';

  do {
    string = DIGITS[num % 10] + string;
    num = Math.floor(num / 10);
  } while (num > 0)

  return string;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"