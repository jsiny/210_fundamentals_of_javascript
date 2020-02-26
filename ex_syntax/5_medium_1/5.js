// Code Snippet 1 after hoisting

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));
// The total value is 15

// ------------------------------

// Code Snippet 2 after hoisting

function counter(count) {
  // ...
}

var rate; // undefined

console.log('The total value is ' + String(counter * rate));
// The total value is NaN

counter = 5;
rate = 3;

// ------------------------------

// Code Snippet 3 after hoisting

function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));
// The total value is 15