function swapWord(word) {
  const firstChar = word[0];
  const lastChar = word[word.length - 1];
  const rest = word.slice(1, word.length - 1);

  return lastChar + rest + firstChar;
}

function swap(sentence) {
  let words = sentence.split(' ');

  words = words.map((word) => {
    if (word.length > 1) {
      return swapWord(word);
    } else {
      return word;
    }
  });
  
  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
