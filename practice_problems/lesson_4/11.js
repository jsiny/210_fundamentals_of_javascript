function missing(arr) {
  var missing = [];
  var start = arr[0];
  var end = arr[arr.length - 1];
  var n;

  for (n = start; n < end; n += 1) {
    if (!arr.includes(n)) missing.push(n);
  }  

  return missing;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []