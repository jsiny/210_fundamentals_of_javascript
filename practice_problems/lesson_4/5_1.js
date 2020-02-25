function slice(array, start, end) {
  var sliced = [];

  for (let i = start; i < end; i += 1) {
    push(sliced, array[i]);
  }

  return sliced;
}

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]