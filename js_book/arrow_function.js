let greetPeople = () => console.log('Good Morning!');
greetPeople();

let add = (a, b) => a + b;

let getNumber = text => {
  let input = prompt(text);
  return Number(input);
}

let num1 = getNumber('Enter a number: ');
let num2 = getNumber('Enter another number: ');
console.log(add(num1, num2));