function gcd(num1, num2) {
  var remainder;

  do {
    remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  } while (remainder != 0);

  return num1;
}


console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(4, 12));   // 4
