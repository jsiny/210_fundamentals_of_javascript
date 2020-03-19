/*
--- Problem ---

inputs:
- sorted array (list of items)
- element to be searched (integer or string)

outputs:
- number (index or -1)

rules:
- return -1 if the element isn't in the list
- the list is always sorted
- recursive algorithm

mental model:


--- Data Structures ---


--- Algorithm ---

high = high || arr.length - 1
low = low || 0
middle = high - low / 2 (floored)

if arr[middle] === element, return middle

if arr[middle] > element, then high = middle - 1
if arr[middle] < element, then low = middle + 1

if low >= high, return -1

binarySearch()

*/

function binarySearch(list, element) {
  let high = list.length - 1;
  let low = 0;
  let middle;
  
  while (low <= high) {
    middle = low + Math.floor((high - low) / 2);

    if (list[middle] === element) return middle;

    if (list[middle] > element) high = middle - 1;
    if (list[middle] < element) low = middle + 1;
  }

  return -1;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
