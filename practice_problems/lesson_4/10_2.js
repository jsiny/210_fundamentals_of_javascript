function combinedArray(even, odd) {
  var result = []; 

  for (let i = 0; i < even.length; i += 1) {
    result.push(even[i], odd[i]);
  }

  return result;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]