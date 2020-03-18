/*
--- Pb ---

input: string
output: boolean

rules:
- you can only use the block letter once
- case insensitive

--- DS ---

- array of chars then indexes

--- Algo ---

- iterate over chars
- map chars with its index
- is the return array equal to its unique equivalent?

*/

function arrayHasUniqueValues(arr) {
  const uniqueValues = [...new Set(arr)];
  return arr.length === uniqueValues.length;
}

function isBlockWord(str) {
  const letters = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU',
                   'VI', 'LY', 'ZM'];

  const indices = str.toUpperCase().split('').map((char) => {
    const duo = letters.filter((s) => s.includes(char))[0];
    return letters.indexOf(duo);
  });

  return arrayHasUniqueValues(indices);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
