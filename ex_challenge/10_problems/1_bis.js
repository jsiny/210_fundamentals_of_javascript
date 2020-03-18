/*
--- Problem ---

input: integer
output: array

rules:
- at each round, only the numbers divisible by this round are toggled

--- Data Structure ---

- range
- array

--- Algorithm ---

- create an array of n + 1 values, filled with true ('on')
- iterate from 2 to n:
-- toggle the value in 'on' if the index is divisible by the current round
- map the 'on' array to its index values only if true
- filter out undefined values
- return array minus first element


*/

function lightsOn(n) {
  const on = Array(n + 1).fill(true);
  
  for (let i = 2; i <= n; i += 1) {
    for (let j = i; j <= n; j += 1) {
      if (j % i === 0) on[j] = !on[j];
    }
  }

  const indices = on.map((boolean, i) => { if (boolean) return i });
  return indices.filter((v) => v); // only keep truthy values (excl. undefined and 0)
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
