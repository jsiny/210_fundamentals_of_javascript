var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);

// Output:

// function () {
//   return 'Victor';
// } function () {
//   return 'Reyes';
// }

// Functions are first class objects in JS, so referencing the function name without the parenthesis would return the function itself, and would not call it.

// Here's the fix:

console.log(person.firstName() + ' ' + person.lastName());