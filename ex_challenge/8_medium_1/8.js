function fibonacci(n) {
  const fibValues = { 1: 1, 2: 1 };

  if (fibValues[n]) return fibValues[n];
  
  fibValues[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return fibValues[n];
}

console.log(fibonacci(1)  === 1);
console.log(fibonacci(2)  === 1);
console.log(fibonacci(3)  === 2);
console.log(fibonacci(4)  === 3);
console.log(fibonacci(5)  === 5);
console.log(fibonacci(12) === 144);
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
