/*
--- Problem --- 

input: odd integer (mb of rows / max row width)
output: none (only logs the diamond)

rules:
- a diamond is, line by line (l):
-- (floored) rows / 2 - l spaces
-- 2 stars more than before

--- Data Structure ---


--- Algorithm ---

- top triangle:
-- stars = 1;
-- iterate from 1 to Math.floor(rows / 2):
--- spaces = Math.floor(rows / 2) - line
--- print ' '.repeat(spaces) + '*'.repeat(stars)
--- increment stars by 2

*/

function diamond(rows) {
  let stars = 1;

  for (let line = 1, spaces, str; line <= (rows - 1) / 2; line += 1) {
    spaces = Math.ceil(rows / 2) - line;
    str = ' '.repeat(spaces) + '*'.repeat(stars);
    console.log(str);
    stars += 2;
  }

  console.log('*'.repeat(rows));

  for (let line = (rows + 3) / 2, spaces, str; line <= rows; line += 1) {
    stars -= 2;
    spaces = line - Math.ceil(rows / 2);
    str = ' '.repeat(spaces) + '*'.repeat(stars);
    console.log(str);
  }
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
