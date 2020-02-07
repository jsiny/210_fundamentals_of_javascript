function times(num1, num2) {
  let result = num1 * num2;
  console.log(result);
  return result;
}

let factOne   = times(1, 1);
let factTwo   = times(2, factOne);
let factThree = times(3, factTwo);
let factFour  = times(4, factThree);
let factFive  = times(5, factFour);

times(times(times(times(times(1, 1), 2), 3), 4), 5);