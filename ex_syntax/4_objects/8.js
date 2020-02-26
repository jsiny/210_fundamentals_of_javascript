function penultimat(string) {
  return string.split(' ')[-2];
}

// The issue is that you can't use negative indexex to access the last N elements of an array (like you would in ruby). Instead, you must use the array's length or the slice method.

function penultimatt(string) {
  words = string.split(' ');
  return words[words.length - 2];
}

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"