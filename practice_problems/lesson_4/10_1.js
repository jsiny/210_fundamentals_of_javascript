function oddElementsOf(arr) {
  var result = [];

  for (var i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]