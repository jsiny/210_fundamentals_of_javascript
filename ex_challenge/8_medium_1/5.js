// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

/*
--- Problem ---

input:
- string containing words and digits

output:
- string only containing words

rules:
- must replace every digit by its word representation

mental model:
- replace all occurrences of digits by their word representation

--- Data Structure ---

input: string
rule:
- array of word digits
- RegExp

--- Algorithm ---

- create an array of word number
- iterate through the array
-- for each number, convert it to a global regexp
-- replace this number by its array index (String)
- return the same string string

*/

function wordToDigit(str) {
  const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let regex;

  NUMBERS.forEach((word, i) => {
    regex = new RegExp('\\b' + word + '\\b', 'g');
    str = str.replace(regex, i);
  })

  return str;
}

let string = 'Please call me at five five five one two three four. Thanks.'
console.log(wordToDigit(string));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));  
// "The weight is done."
