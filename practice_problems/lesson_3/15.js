function trim(str) {
  var temp = trimLeftAndReverse(str);
  return result = trimLeftAndReverse(temp);
}

function trimLeftAndReverse(str) {
  var trimmed = trimLeft(str);
  var reversed = trimmed.split('').reverse().join('');
  return reversed;
}

function trimLeft(str) {
  var result = '';
  var copyMode = false;

  for (var i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') copyMode = true;
    if (copyMode) result += str[i];
  }

  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""
