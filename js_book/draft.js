let name = 'Pixel';
console.log(name.toUpperCase());
console.log(name);

let oddNums = [1, 3, 5, 7, 9];
oddNums.pop();
console.log(oddNums);

function ChangeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
ChangeFirstElement(oneToFive);
console.log(oneToFive);

function addToArray(array) {
  return array.concat(0);
}

oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive));
console.log(oneToFive);