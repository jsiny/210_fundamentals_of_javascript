function fibonacci(n) {
  let previousTwo = [1, 1];

  for (let counter = 3, first, last; counter <= n; counter += 1) {
    first = previousTwo[0];
    last  = previousTwo[1];

    previousTwo = [last, first + last];
  }

  return previousTwo[1];
}

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
