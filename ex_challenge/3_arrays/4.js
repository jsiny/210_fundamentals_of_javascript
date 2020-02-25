function concat() {
  var newArray = [];
  var arg;

  for (let i = 0; i < arguments.length; i += 1) {
    arg = arguments[i];

    if (Array.isArray(arg)) {
      arg.forEach(element => newArray.push(element))
    } else {
      newArray.push(arg);
    }
  }

  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));     // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));            // [1, 2, "three", 4]
