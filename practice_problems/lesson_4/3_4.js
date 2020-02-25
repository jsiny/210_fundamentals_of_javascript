var count = [1, 2, 3];

function shift(array) {
  var value = array[0];
  var i;

  for (i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return value;
}

console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]