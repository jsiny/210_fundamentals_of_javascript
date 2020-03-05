function sequence(n) {
  return Array(n).fill(1).map((x, i) => x + i);
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

function sequenz(n) {
  return [...Array(n).keys()].map(x => x + 1);
}

console.log(sequenz(5));    // [1, 2, 3, 4, 5]
console.log(sequenz(3));    // [1, 2, 3]
console.log(sequenz(1));    // [1]