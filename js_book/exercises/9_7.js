function sumOfSquares(array) {
  return array.reduce((acc, el) => acc + el ** 2, 0);
};

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83