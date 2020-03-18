/*
--- Problem ---

inputs:
- integer: nb of rows (and max width of the star)

outputs:
- none (what matters is what is printed)

rules:
- the pattern is as follows, for 9 rows:
-- 0 padding, 3 spaces (0 + 1 + 3 + 1 + 3 + 1 + 0)
-- 1 padding, 2 spaces (1 + 1 + 2 + 1 + 2 + 1 + 1)
-- 2 padding, 1 space  (2 + 1 + 1 + 1 + 1 + 1 + 2)
-- 3 padding, 0 space  (3 + 3 + 3)
-- 0 padding, 0 space  (9)
-- 3 padding, 0 space  (3 + 3 + 3)
-- 2 padding, 1 space  (2 + 1 + 1 + 1 + 1 + 1 + 2)
-- 1 padding, 2 spaces (1 + 1 + 2 + 1 + 2 + 1 + 1)
-- 0 padding, 3 spaces (0 + 1 + 3 + 1 + 3 + 1 + 0)
- you can deduce the rest of the data from just a number: the nb of spaces between two stars:
-- 3 => padding = (9 - 3 - 3 * 2) / 2 = 0
-- 2 => padding = (9 - 3 - 2 * 2) / 2 = 1
-- 1 => padding = (9 - 3 - 1 * 2) / 2 = 2
-- 0 => padding = (9 - 3 - 0 * 2) / 2 = 3
-- (special line full of stars)
-- repeat while incrementing the spaces between two stars

mental model:
- create the pattern ([3, 2, 1, 0, -1, 0, 1, 2, 3] for 9)
- display the line depending on the nb of spaces between 2 lines (-1 => full line)

--- Data Structures ---

- integer > array of numbers

--- Algorithm ---

- convert the number of rows into the sequence of numbers
-- 11 => [4, 3, 2, 1, 0, -1, 0, 1, 2, 3, 4]
-- 9 => [3, 2, 1, 0, -1, 0, 1, 2, 3]
-- 7 => [2, 1, 0, -1, 0, 1, 2]

-- starting number: 2 + (rows - 7) / 2
-- min row = 7
-- min spaces = 2

-- increment = -1
-- for loop:
--- starting at starting number
--- while element <= starting number
---- push element into sequence array
---- when element === -1, inverse the increment

- iterate over the sequence
-- print the adequate line depending on the total nb of rows and the current nb of spaces


*/



function spaceSequence(rows) {
  const start = (rows - 7) / 2 + 2;
  const sequence = [];
  let step = -1;

  for (let n = start; n <= start; n += step) {
    sequence.push(n);
    if (n === -1) step = 1;
  }

  return sequence;
}

function printLine(spaces, rows) {
  if (spaces < 0) return console.log('*'.repeat(rows));

  const padding = (rows - 3 - spaces * 2) / 2;
  const line = ' '.repeat(padding) + ['*', '*', '*'].join(' '.repeat(spaces));
  console.log(line);
}

function star(rows) {
  spaceSequence(rows).forEach((spaces) => printLine(spaces, rows));
}

star(7);
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *


star(9);
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(11);
// *    *    *
//  *   *   *
//   *  *  *
//    * * *
//     ***
//  *********
//     ***
//    * * *
//   *  *  *
//  *   *   *
// *    *    *
