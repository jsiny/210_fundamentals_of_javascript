function repeater(str) {
  return str.split('').reduce((sentence, c) => (sentence + c + c), ''); 
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
