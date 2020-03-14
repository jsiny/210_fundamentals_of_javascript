/*
--- problem ---

input:
- a large number representing the digits to be rotated
- a small number, representing the number of digits (from the right) that should be rotated

output:
- another numbeR

rules:
- from the right of the number, take the number-th digit and put it at the end

mental model:
- split the digit into 2 parts:
-- the immutable part
-- the mutable part
- apply rotateArray() to the mutable part
- join the array back into a number


--- data structure ---

input:
- number > string > array of strings

output:
- array > string > number

--- algo ---

- convert the digits into an array of string digits
- splice the array and save the return value to array to rotate
- concat the rest of the digits array and the rotated slice
- join the array into a string and convert it to a number
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;

  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(digits, n) {
  let result       = String(digits).split('');
  const index      = result.length - n;
  const rotatedArr = rotateArray(result.splice(index));

  result = result.concat(rotatedArr);
  return Number(result.join(''));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
