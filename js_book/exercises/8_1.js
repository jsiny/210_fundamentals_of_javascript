rlSync = require('readline-sync');
age = Number(rlSync.question('How old are you? '));

console.log(`You are ${age} years old.`);

for (let years = 10; years < 45; years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}