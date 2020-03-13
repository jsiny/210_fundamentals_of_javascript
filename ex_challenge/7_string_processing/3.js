function letterCaseCount(string) {
  let count = { lowercase: 0, uppercase: 0, neither: 0};

  [...string].forEach(char => {
    if (/[a-z]/.test(char)) {
      count.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      count.uppercase += 1;
    } else {
      count.neither += 1;
    }
  })
  
  return count;
}

console.log(letterCaseCount('abCdef 123')); 
// { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));
// { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));
// { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));
// { lowercase: 0, uppercase: 0, neither: 0 }

function countPattern(string, pattern) {
  return (string.match(pattern) || []).length;
}

function letterCaseKount(string) {
  let lowerCase = countPattern(string, /[a-z]/g);
  let upperCase = countPattern(string, /[A-Z]/g);
  let neither   = countPattern(string, /[^a-z]/gi);

  return {
    lowercase: lowerCase,
    uppercase: upperCase,
    neither:   neither,
  };
}

console.log(letterCaseKount('abCdef 123')); 
// { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseKount('AbCd +Ef'));
// { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseKount('123'));
// { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseKount(''));
// { lowercase: 0, uppercase: 0, neither: 0 }