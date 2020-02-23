var num = parseInt(prompt('Please enter an integer greater than 0:'));
var choice = prompt('Enter "s" to compute the sum, or "p" to compute the product.')
var result;

if (choice === 's') {
  result = sumOfConsecutiveNumbers(num);
  console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
} else if (choice === 'p') {
  result = productOfConsecutiveNumbers(num);
  console.log(`The product of the integers between 1 and ${num} is ${result}.`);
} else {
  console.log("Sorry, I'm not sure I understand your request");
}

function sumOfConsecutiveNumbers(n) {
  var sum = 0;

  for (var i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
}

function productOfConsecutiveNumbers(n) {
  var product = 1;

  for (var i = 1; i <= n; i += 1) {
    product *= i;
  }

  return product;
}