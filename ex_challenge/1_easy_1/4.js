var bill = parseInt(prompt('What is the bill?'), 10);
var percentage = parseInt(prompt('What is the tip percentage?'), 10);

var tip = bill * percentage / 100;
var total_bill = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total_bill.toFixed(2)}`);