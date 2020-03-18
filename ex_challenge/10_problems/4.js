/*
--- Problem ---

inputs:
- string
- integer (the key)

output:
- a string

rules:
- case sensitive
- if the key is higher than 26, its remainder (key % 26) is used
- if the key and the letter position are higher than 26, it 'wraps around'
- non letter characters are kept as they are

mental model:
- iterate through the chars
- if it's a letter, find its ascii number and add 26 to it, being mindful of edge cases
- if it's not, keep the char as it is

--- Data Structure ---

- string > array > string
- regex

--- Algorithm ---

- convert the string to an array of chars
- map the array into another array of chars:
-- if the char is a letter, then return the encrypted char
-- if it's neither, return the current char
- join the array into a string

- encryption function:
-- define uppercase offset ('A'.charCodeAt(0))
-- define lowercase offset ('a'.charCodeAt(0))
-- define offset depending on the case of the given char
-- letter index =  current char code + key - offset, modulo 26
-- return String from char Code (offset + letter index)

*/

function encryptChar(char, key) {
  const offset = /[A-Z]/.test(char) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const letterIndex = (char.charCodeAt(0) + key - offset) % 26;
  return String.fromCharCode(offset + letterIndex);
}

function caesarEncrypt(str, key) {
  return [...str].map((char) => {
    return /[a-z]/i.test(char) ? encryptChar(char, key) : char;
  }).join('');
}

console.log(caesarEncrypt('A', 0) === 'A');
console.log(caesarEncrypt('A', 3) === 'D');
console.log(caesarEncrypt('y', 5) === 'd');
console.log(caesarEncrypt('a', 47) === 'v');
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === 'ZABCDEFGHIJKLMNOPQRSTUVWXY');
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === 'Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!');
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === 'Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?');
console.log(caesarEncrypt('10 Little Indians', 2) === '10 Nkvvng Kpfkcpu');
