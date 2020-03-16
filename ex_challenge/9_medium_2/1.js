/*
--- Problem ---

input: string
output: object

rules:
- space, digits, and other chars are 'neither'
- the percentages must be displayed as floats with 2 decimal digits

mental model:
- return an object containing 3 properties. Update these properties depending on each char. Use a regex.

--- Data Structure ---

- input: string
- output: object
- rules: regex

--- Algorithm ---

- length of string
- create 3 variables:
-- lowercase: 2 decimal value, filter lowercase / length

- return result object

*/

// function computePercentage(str, regex) {
//   if (str.length === 0) return '0.00';
//   let filteredChars = str.match(regex) || [];
//   return (filteredChars.length / str.length * 100).toFixed(2)
// }

function letterPercentages(str) {
  const total      = str.length || 1;
  const percentage = (count) => (count / total * 100).toFixed(2);
  const countType  = (str, regex) => (str.match(regex) || []).length;

  const lowercase  = percentage(countType(str, /[a-z]/g));
  const uppercase  = percentage(countType(str, /[A-Z]/g));
  const neither    = percentage(countType(str, /[^a-z]/gi));

  return { lowercase, uppercase, neither };
}

// --- Examples ---

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages(''));
// { lowercase: "0.00", uppercase: "0.00", neither: "0.00" }