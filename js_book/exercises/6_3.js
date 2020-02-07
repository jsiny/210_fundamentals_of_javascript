let rlSync = require('readline-sync');

let num1 = parseFloat(rlSync.question('Enter the first number: '));
let num2 = parseFloat(rlSync.question('Enter the second number: '));

let multiply = (a, b) => a * b;

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);