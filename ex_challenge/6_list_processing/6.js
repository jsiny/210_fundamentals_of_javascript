function substrAtStart(string) {
  return [...string].map((_, i) => string.slice(0, i + 1));
}

function substrings(string) {
  return [...string].flatMap((_, i) => substrAtStart(string.slice(i)));
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
