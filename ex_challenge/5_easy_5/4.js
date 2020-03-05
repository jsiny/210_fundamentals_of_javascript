function centerOf(sentence) {
  const startIndex = Math.ceil(sentence.length / 2) - 1;
  const numberOfChars = sentence.length % 2 === 0 ? 2 : 1;
  return sentence.slice(startIndex, startIndex + numberOfChars);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"
