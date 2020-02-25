var count = [1, 2, 3];

function pop(array) {
  var newLength = array.length - 1;
  var value = array[newLength];

  array.length = newLength;
  return value;
}

console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]