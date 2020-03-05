function doubleConsonants(str) {
  const chars = str.split('');
  return chars.map((c) => {
    if (/[a-z]/i.test(c) && /[^aeiou]/i.test(c)) {
      return c + c;
    }
    return c;
  }).join('');
}

console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""
