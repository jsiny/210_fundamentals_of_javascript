/*
--- Problem ---

input: an integer (a year)
output: another integer (the count of Friday the 13ths)

rules:
- year greater than 1752 (Gregorian calendar)

mental model:
- gather all the 13ths of a year and filter those that happened on a Friday

--- Data Structure ---

- date objects
- array

--- Algorithm ---

- create a date object at year = year, month = 0, day = 13
- iterate through the months (until 11) and add all those dates to an array
- filter the ones where getDay = 5
- count the filter and return it

*/

function fridayThe13ths(year) {
  return new Array(12).fill(0).reduce((count, _, i) => {
    const thirteen = new Date(year, i, 13, 5);
    return thirteen.getDay() === 5 ? count += 1 : count;
  }, 0);
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);
