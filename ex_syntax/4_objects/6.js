var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray)); // 10

// An array property that isn't an element is not counted as part of the array's length property. Therefore, the after the `for` loop, sum is equal to 20, and is only divided by 2 in the return statement.

// You can solve this problem by using Object.keys(array).length instead:

return sum / Object.keys(array).length