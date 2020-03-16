/*
--- Problem ---

input: 3 integers representing the length of the triangle's sidE
output: a string ('equilateral', 'isosceles', 'scalene', or 'invalid')

rules:
- equilateral: a = b = c
- isosceles: a = b or a = c or b = c
- scalene: a != b != c
- valid triangle:
-- a, b and c > 0
-- a > b and a > c and b + c > a

mental model:
- check if the triangle is valid
- if it is, find its specificity

--- Data Structure ---

keep everything as integer probably

--- Algorithm ---

- check if the triangle is valid
-- a, b and c > 0 and a > b and a > c and b + c > a
- if it isn't , return 'invalid'
- if a = b = c return 'equilateral'
- if a = b or a = c or b = c return 'isosceles'
- else return 'scalene'

*/

function triangle(...sides) {
  const [shortest, middle, longest] = sides.sort((a, b) => a - b);

  const validTriangle = () => {
    if (sides.some((n) => n === 0))  return false;
    if (shortest + middle < longest) return false;
    return true;
  };

  const triangleType = () => {
    if (longest === shortest)                      return 'equilateral';
    if (longest === middle || middle === shortest) return 'isosceles';
    return 'scalene';
  };
 
  return validTriangle() ? triangleType() : 'invalid';
}

console.log(triangle(3, 3, 3)   === 'equilateral');
console.log(triangle(3, 3, 1.5) === 'isosceles');
console.log(triangle(3, 4, 5)   === 'scalene');
console.log(triangle(0, 3, 3)   === 'invalid');
console.log(triangle(3, 1, 1)   === 'invalid');
