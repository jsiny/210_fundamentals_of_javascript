function findFibonacciIndexByLength(length) {
  var first = 1;
  var last  = 1;
  var i = 2;
  var temp;

  while (String(last).length < length) {
    temp  = last;
    last  = first + last;
    first = temp;
    i += 1;
  }

  return i;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
