function oddLengths(arr) {
  return arr.reduce((filteredArray, string) => {
    let length = string.length;
    if (length % 2 === 1) filteredArray.push(length);
    return filteredArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]