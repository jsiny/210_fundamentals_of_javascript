let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenNums = myArray.filter(num => num % 2 === 0);

evenNums.forEach(num => console.log(num));

// With only 1 method

myArray.forEach(function(value) {
  if (value % 2 === 0) console.log(value);
});