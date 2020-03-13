function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

function isUpperKase(string) {
  return !(/[a-z]/.test(string));
}

console.log(isUpperKase('t'));               // false
console.log(isUpperKase('T'));               // true
console.log(isUpperKase('Four Score'));      // false
console.log(isUpperKase('FOUR SCORE'));      // true
console.log(isUpperKase('4SCORE!'));         // true
console.log(isUpperKase(''));                // true