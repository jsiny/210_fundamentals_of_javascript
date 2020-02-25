function lastIndexOf(array, element) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === element) return i;
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1