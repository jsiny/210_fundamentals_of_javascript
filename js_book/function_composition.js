function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

console.log(add(20, 45)); // 65

console.log(substract(80, 10)); // 70

console.log(times(add(20, 45), substract(80, 10))); // 4550

let result = add(substract(80, 10),
                 times(substract(20, 6),
                       add(30, 5)));

console.log(result); // 560