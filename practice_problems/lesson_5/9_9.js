var today = new Date();

console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());

var tomorrow = new Date(today.getTime());
tomorrow.setDate(26);

console.log(tomorrow); 

var nextWeek = new Date(today.getTime());
console.log(today === nextWeek);
console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());
