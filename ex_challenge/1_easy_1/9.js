function multisum(n) {
  var sum = 0;
  var i;

  for (i = 3; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168