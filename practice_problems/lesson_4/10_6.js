function uniqueElements(arr) {
  var unique = [];
  var i;

  for (i = 0; i < arr.length; i += 1) {
    if (!unique.includes(arr[i])) unique.push(arr[i]);
  }

  return unique;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]