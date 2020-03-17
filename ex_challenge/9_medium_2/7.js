/*
--- Problem --- 

input: array
output: same array, mutated

rules:
- sorting is done 'in place'
- an array is considered 'sorted' when an entire pass has been made without any swap
- if the current value is higher than the next one, then swap the two values
- must work for integer and string values

--- Data Structure ---

array

--- Algorithm ---

- initialize swap variable to false
- do:
-- forEach loop, with index:
-- if n > arr[i + 1], swap the two values and swap = true
- while swap is true
- return array

*/

function bubbleSort(arr) {
  let swap;
  const swapValues = (i) => {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    swap = true;
  };

  do {
    swap = false;
    arr.forEach((n, i) => { if (n > arr[i + 1]) swapValues(i) });
  } while (swap);

  return arr;
}

let array = [5, 3];
bubbleSort(array);
console.log(array); // [3, 5]

array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array); // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

array = [6, 2, 0, 1, 4];
bubbleSort(array);
console.log(array); // [0, 1, 2, 4, 6]
