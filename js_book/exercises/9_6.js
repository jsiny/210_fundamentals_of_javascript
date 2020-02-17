function oddLengths(array) {
  let lengths = array.map(string => string.length);
  return lengths.filter(value => value % 2 === 1);
};


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]