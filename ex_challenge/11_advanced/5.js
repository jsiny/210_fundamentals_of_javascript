/*
--- Problem ---

inputs:
- 2 sorted arrays of integers

outputs:
- 1 sorted array (new array)

rules:
- must build sorted array one element after the other
- the result array must be sorted as it is built
- possible that one of the array is empty

mental model:
- use 2 pointers (one for each input array), that keep track of where we are within an array
- compare the two values and add to Result array the smallest
- keep going until the two pointers are over the array's length

--- Data Structures ---

- 2 arrays for the input with 2 integer pointers
- 1 array for the output 

--- Algorithm ---

- initialize 2 variables (i & j) at 0
- initialize result array []
- do :
-- if i > arr1.length => push the rest of arr2 sliced and return
-- same in reverse

-- check which element is bigger and push it to result array
-- increment the relevant index
- while i < arr1.length | j < arr2.length
- return result
*/

// Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

function merge(arr1, arr2) {
  const result = [];
  let [i, j] = [0, 0];

  do {
    if (i === arr1.length) return result.concat(arr2.slice(j));
    if (j === arr2.length) return result.concat(arr1.slice(i));

    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }

  } while (true);
}

// Examples:

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([1], [1, 2, 2, 3]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
