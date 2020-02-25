function firstIndex(target, array) {
  var position = -1;
  var i;

  for (i = 0; i < array.length; i += 1) {
    if (target === array[i]) {
      position = i;
      break;
    }
  }

  return position;
}

console.log(firstIndex(2, [1, 2, 3]));
console.log(firstIndex(9, [1, 2, 3]));