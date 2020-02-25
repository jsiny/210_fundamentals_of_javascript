function arrayToString(arr) {
  newArray = [];

  arr.forEach(element => newArray.push(String(element)));

  return newArray;
}

console.log(arrayToString([1, 2, 3]));
console.log(arrayToString([1, 'q', 3]));