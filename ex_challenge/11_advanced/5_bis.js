/*
--- Problem ---

inputs:
2 sorted arrays of digits

outputs:
1 sorted array (new)

rules:
- no mutation of inputs
- no use of sort()
- the sorting must happen element per element

mental model:
- create a copy of the first array and initialize an index var
- for each element of the second array, check whether it's smaller. if it is, prepend this element in the result array. 

--- Data Structures ---

- arrays

--- Algorithm ---

- create result array as a copy (slice) of first array
- initialize index at 0
- iterate through the second array:
-- while arr[i] < arr2[j]: increment i
- then insert arr2[j] inside result array (splice(i, 0, element))
- return result array
*/

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

// Examples:

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([1], [1, 2, 2, 3]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

let ary = [2, 4, 6];
let arz = [1];

console.log(merge(ary, arz)); // [1, 2, 4, 6]
console.log(ary);             // [2, 4, 6]
console.log(arz);             // [1]
