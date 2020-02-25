function concat(arr1, arr2) {
  var newArray = [];
  
  arr1.forEach(element => push(newArray, element));
  arr2.forEach(element => push(newArray, element));

  return newArray; 
}

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]