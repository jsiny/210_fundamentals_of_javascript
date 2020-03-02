const rlSync = require('readline-sync');

const order = ['1st', '2nd', '3rd', '4th', '5th'];
const numbers = [];

let last;

order.forEach((num) => {
  let answer;
  answer = parseInt(rlSync.question(`Enter the ${num} number: `), 10);
  numbers.push(answer);
});

last = parseInt(rlSync.question('Enter the last number: '), 10);

if (numbers.includes(last)) {
  console.log(`The number ${last} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${last} does not appear in [${numbers.join(', ')}].`);
}

// --- Further Exploration ---

// Looking for a number higher than 25

console.log(numbers.some((element) => element > 25));
