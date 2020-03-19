/*
--- Problem ---

inputs:
- an array of digits or an array of strings

outputs:
- another array

rules:
- new array
- sorted order

mental model:
- transform the array into nested arrays until obtaining only single elements
- join back pairs of nested arrays through sorted order

--- Data Structures ---


--- Algorithm ---


*/

function mergeSort(array) {
  if (array.length === 1) return array;

  let subArr1 = array.slice(0, array.length / 2);
  let subArr2 = array.slice(array.length / 2);

  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2);

  console.log(subArr1);
  console.log(subArr2);

  let result = merge(subArr1, subArr2);
  console.log('---')
  console.log(result);
  return result;
}


// Examples:

function merge(arr1, arr2) {
  const result = arr1.slice();
  let i = 0;

  arr2.forEach((n) => {
    while (result[i] < n) i += 1;
    result.splice(i, 0, n);
    i += 1;
  })

  return result;
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]