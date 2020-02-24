function crunch(string) {
  var newString = '';
  var char;
  var i;

  for (i = 0; i < string.length; i += 1) {
    char = string[i];

    if (char !== string[i + 1]) {
      newString += char;
    }
  }

  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""