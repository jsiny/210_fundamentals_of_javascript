function repeat(fruit, quantity) {
  return Array(quantity).fill(fruit);
}

function buyFruit(arr) {
  return arr.flatMap((subArr) => repeat(subArr[0], subArr[1]));
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
