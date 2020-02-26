var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// In the code above, the enclosing scope is the global scope containing the variable startingBalance. Retaining access means that a variable's value is not fixed at the time when the function is defined or first executed. Instead, the value is dynamically looked up each time the function is called.