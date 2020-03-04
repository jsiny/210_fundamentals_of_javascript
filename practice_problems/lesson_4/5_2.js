var count = [1, 2, 3, 4, 5, 6, 7, 8];

function splice(array, start, number) {
  var removed = [];
  var i;

  for (i = start; i < array.length; i += 1) {
    if (i < start + number) push(removed, array[i]);
    array[i] = array[i + number];
  }

  array.length = array.length - number;
  return removed;
}

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]