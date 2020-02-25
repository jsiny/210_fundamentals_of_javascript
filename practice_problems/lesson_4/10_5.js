function matrixSums(arr) {
  var result = [];
  var i;

  for (i = 0; i < arr.length; i += 1) {
    result.push(arr[i].reduce((sum, value) => sum + value));
  }

  return result;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]