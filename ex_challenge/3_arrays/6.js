function reverse(input) {
  if (Array.isArray(input)) {
    return reverseArray(input)
  } else {
    return reverseString(input)
  }
}

function reverseArray(array) {
  var result = [];

  for (var i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }

  return result;
}

function reverseString(string) {
  var arr = string.split('');
  return reverseArray(arr).join('');
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

var array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
console.log(array);         // [1, 2, 3]