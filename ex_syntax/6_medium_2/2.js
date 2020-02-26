var person = { name: 'Victor' };
var otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true

// The === operator tests for strict equality (object equality), not value equality. The code can be fixed by making sure that the two variables point to the same object instead of two objects with the same properties.

