/*
--- Problem ---

input: integer
output: integer (higher than the input)

rules: 
- what's a feature number?
-- odd (n % 2 === 1)
-- multiple of 7 (n % 7 === 0)
-- all its digits appear only once
- the output cannot be the same number as the input
- the max possible featured number is 9876543201
- if higher, issue an error message

--- Data Structure ---


--- Algorithm ---

- if n > MAX_NUM, throw an error
- do/while loop:
-- increment n until n is a featured number
-- return that number

*/

const MAX_NUM = 9876543201;

function nextOddMultipleOf7(n) {
  while (n % 2 === 0 || n % 7 !== 0) n += 1;
  return n;
}

function digitsAreUnique(n) {
  const digits       = String(n).split('');
  const uniqueDigits = [...new Set(digits)];
  return digits.length === uniqueDigits.length;
}

function featured(n) {
  if (n > MAX_NUM) return 'There is no featured number.';
  
  let oddMultiple = nextOddMultipleOf7(n + 1);
  while (!digitsAreUnique(oddMultiple)) oddMultiple += 14;
  return oddMultiple;
}

// ----

function isFeaturedNumber(n) {
  const isOdd           = () => n % 2 === 1;
  const isMultipleOf7   = () => n % 7 === 0;
  const digitsAreUnique = () => {
    const digits = String(n).split('');
    const uniqueDigits = [...new Set(digits)];
    return digits.length === uniqueDigits.length;
  };

  return isOdd() && isMultipleOf7() && digitsAreUnique();
}

function featuredd(n) {
  if (n > MAX_NUM) return 'There is no featured number.';

  do {
    n += 1;
  } while (!isFeaturedNumber(n));

  return n;
}

console.log(featured(0)          === 7);
console.log(featured(12)         === 21);
console.log(featured(20)         === 21);
console.log(featured(21)         === 35);
console.log(featured(997)        === 1029);
console.log(featured(1029)       === 1043);
console.log(featured(999999)     === 1023547);
console.log(featured(999999987)  === 1023456987);
console.log(featured(9876543202) === 'There is no featured number.');
