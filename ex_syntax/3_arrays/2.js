var myArray = [1, 2, 3, 4];
var myOtherArray = [];

myArray.forEach(element => myOtherArray.push(element));

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]

// ---

var myArr = [1, 2, 3, 4];
var myOtherArr = myArr.slice();

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]