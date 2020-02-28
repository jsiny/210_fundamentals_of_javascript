function isPalindromic(string) {
  return string === string.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  const str = String(num);
  const result = isPalindromic(str);
  console.log(result);
  return result;
}

isPalindromicNumber(34543); // true
isPalindromicNumber(123210); // false
isPalindromicNumber(22); // true
isPalindromicNumber(5); // true
