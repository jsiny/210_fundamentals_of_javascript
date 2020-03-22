// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

/*
--- Problem ---

inputs:
string

outputs:
string

rules:
- even index: capitalize
- odd index: lwoercase

mental model:
- map the array by changing each char depending on its index

--- Data Structures ---

string > array > string

--- Algorithm ---

- split the string into an array
- map the array: 
-- if i is even, return the char uppercase
-- else, return it lowercase
- join the array back into a string
- return it

*/

function staggeredCase(string) {
  let uppercase = false;

  return string.split('').map((char, idx) => {
    if (/[a-z]/i.test(char)) {
      uppercase = !uppercase;
      return uppercase ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

// Examples:

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
