/*
--- Problem --- 

input: odd integer (mb of rows / max row width)
output: none (only logs the diamond)

rules:
- a diamond has an odd number of stars per line (1, 3, .., n - 2, n, n - 2... 1)
- whites: (rows - stars) / 2

mental model:
- compute the number suite for the nb of stars 
- for each number, display the nb of whites and stars

--- Data Structure ---

nb of stars per line: array


--- Algorithm ---

- find the oddSequence 
-- increment = true
-- count = 1
-- iterate from 1 to n:
-- if increment:
--- count += 2
-- else:
--- count -= 2
--- if count === n, increment = false
--- return count

- for each element of the sequence:
-- print the whites + stars

*/

function oddSequence(n) {
  let increment = 2;
  let sequence = [];

  for (let num = 1; num > 0; num += increment) {
    sequence.push(num);
    if (num === n) increment = -2;
  }

  return sequence;
}

function diamond(rows) {
  const sequence = oddSequence(rows);

  sequence.forEach((stars) => {
    let spaces = (rows - stars) / 2;
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
  })
}

diamond(1);
// *
 
diamond(3);
//  *
// ***
//  *

diamond(9);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
