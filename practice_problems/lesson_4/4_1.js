function indexOf(array, element) {
  for (var i = 0; i < array.length; i += 1) {
    if (element === array[i]) return i;
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

console.log([1, 2, 3, 3].indexOf(3));          // 2
console.log([1, 2, 3, 3].indexOf(3, 3));       // 3