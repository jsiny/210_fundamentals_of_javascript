function reverseArray(arr) {
  var newArray = [];
  var i = arr.length - 1;

  for (i; i >= 0; i -= 1) {
    newArray.push(arr[i]);
  }

  return newArray;
}

console.log(reverseArray(['Juliette', 'Hélène', 'Charles']));