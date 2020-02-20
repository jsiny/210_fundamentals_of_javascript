function logMultiples(number) {
  var multiple = Math.floor(100 / number) * number;

  while (multiple > 0) {
    if (multiple % 2 === 1) console.log(multiple);
    multiple -= number;
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21