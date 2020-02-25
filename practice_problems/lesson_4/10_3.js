function mirroredArray(array) {
  return array.concat(array.slice().reverse());
}

console.log(mirroredArray([1, 2, 3]))