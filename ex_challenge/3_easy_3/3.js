const rlSync = require('readline-sync');

const age = Number(rlSync.question('What is your age? '));
const retirementAge = Number(rlSync.question('At what age would you like to retire? '));

const year = new Date().getFullYear();
const yearsBeforeRetirement = retirementAge - age;
const retirementYear = year + yearsBeforeRetirement;

console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsBeforeRetirement} years of work to go!`);
