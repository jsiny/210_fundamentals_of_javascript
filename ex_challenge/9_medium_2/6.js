// --- Launch School solution ---

function sumSquareDifferencez(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}

// --- Abstract solution --- 

function sumSquareDifference(n) {
  const range = new Array(n).fill(0).map((_, i) => i + 1);
  const squareOfSum  = range.reduce((sum, x) => sum + x) ** 2;
  const sumOfSquares = range.reduce((sum, x) => sum + x ** 2);

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3)   === 22);
console.log(sumSquareDifference(10)  === 2640);
console.log(sumSquareDifference(1)   === 0);
console.log(sumSquareDifference(100) === 25164150);
