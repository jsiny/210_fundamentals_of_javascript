/*
--- Problem ---

inputs:
- string to be encrypted
- string (keyword)

outputs:
- string

rules:
- each letter of the keyword is treated as a shift value
- the case of the char keyword doesn't matter
- if a plaintext char is not a letter, the keyword char isn't used
- the keyword pattern is repeated as long as necessary

mental model:
- convert the keyword into an array of numeric keys
- iterate through the chars,
-- if the char is a letter: call the ceaserEncrypt() function with the adequate key. Increment the pointer on the keys.
-- if it isn't, do not increment the pointer on the keys


--- Data Structures ---

- convert the plaintext string into an array of chars, then join it back into a string
- convert the keyword into an array of integers

--- Algorithm ---

- convert the keyword into an array of integers, representing their 'letter position'
-- iterate over every uppercase char (map)
-- return the char code - 65
- create an index pointer at 0
- convert the plaintext string into an array of chars
- map this array:
-- if the char is a letter, replace it by its ceaser encryption with the current key index. Increment the index pointer.
-- if it isn't, return the current char.
- join the array into a string

*/

function caesarEncrypt(char, key) {
  const offset = /[A-Z]/.test(char) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const letterIndex = (char.charCodeAt(0) + key - offset) % 26;
  return String.fromCharCode(offset + letterIndex);
}

function convertKeyword(keyword) {
  return [...keyword.toUpperCase()].map((char) => char.charCodeAt(0) - 65);
}

function vigenereEncrypt(str, keyword) {
  const keys = convertKeyword(keyword);
  let i = -1;

  return [...str].map((char) => {
    if (/[^a-z]/i.test(char)) return char;
    i += 1;
    return caesarEncrypt(char, keys[i % keys.length]);
  }).join('');
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'A') === "Pineapples don't go on pizzas!");

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa') === "Pineapples don't go on pizzas!");

console.log(vigenereEncrypt('Doggy', 'Rabbit') === 'Uohhg');
