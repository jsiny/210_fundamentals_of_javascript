function substrAtStart(string) {
  return [...string].map((_, i) => string.slice(0, i + 1));
}

function substrings(string) {
  return [...string].flatMap((_, i) => substrAtStart(string.slice(i)));
}

function isPalindrome(word) {
  return word.length > 1 && word === [...word].reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd')); // []
console.log(palindromes('madam')); // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
