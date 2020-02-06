let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`);

for (let years = 10; years <  50; years += 10) {
  console.log(`In ${years} years, you will be ${years + age} years old.`);
}


