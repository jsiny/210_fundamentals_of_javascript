// Browser console

function greetPerson(greetingMessage) {
  let firstName = prompt('What is your first name? ');
  let lastName = prompt('What is your last name? ');
  console.log(greetingMessage + ', ' + firstName + ' ' +  lastName);
}

// Node

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);