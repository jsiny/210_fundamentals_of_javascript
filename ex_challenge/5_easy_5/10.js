function reverseIfMoreThan5Chars(word) {
  return word.length >= 5 ? [...word].reverse().join('') : word;
}

function reverseWords(str) {
  return str.split(' ').map(reverseIfMoreThan5Chars).join(' ');
}

console.log(reverseWords('Professional')); // "lanoisseforP"
console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')); // "hcnuaL loohcS"
