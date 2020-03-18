/*
--- Problem ---

input: integer
output: array

rules:
- a light is on at the end if it's an integer squared

mental model:
- iterate from 1 to sqrt(n) by squaring all values

--- Data Structure ---

- range
- array

--- Algorithm ---

- find the (integer) square root of n
- create a range from 1 to square root
- map to the square value 

*/

function lightsOn(n) {
  const squareRoot = Math.floor(Math.sqrt(n));
  return Array(squareRoot).fill().map((_, i) => (i + 1) ** 2);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(10));        // [1, 4, 9]
// Round 1: all lights are on
// Round 2: off [2, 4, 6, 8, 10] | on [1, 3, 5, 7, 9]
// Round 3: off [2, 3, 4, 8, 9, 10] | on [1, 5, 6, 7]
// Round 4: off [2, 3, 9, 10] | on [1, 4, 5, 6, 7, 8]
// Round 5: off [2, 3, 5, 9] | on [1, 4, 6, 7, 8, 10]
// Round 6: off [2, 3, 5, 6, 9] | on [1, 4, 7, 8, 10]
// Round 7: off [2, 3, 5, 6, 7, 9] | on [1, 4, 8, 10]
// Round 8: off [2, 3, 5, 6, 7, 8, 9] | on [1, 4, 10]
// Round 9: off [2, 3, 5, 6, 7, 8] | on [1, 4, 9, 10]
// Round 10: off [2, 3, 5, 6, 7, 8, 10] | on [1, 4, 9]

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
