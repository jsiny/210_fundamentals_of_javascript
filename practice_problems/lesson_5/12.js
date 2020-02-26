function repeatedCharacters(string) {
  var count = {};
  var chars = string.toLowerCase().split(''); 
  var i;

  for (i = 0; i < chars.length; i += 1) {
    if (count[chars[i]] !== undefined) {
      count[chars[i]] += 1;
    } else {
      count[chars[i]] = 1;
    }
  }

  for (letter in count) {
    if (count[letter] === 1) delete count[letter];
  }

  return count;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }