function displayMaxValue(arr) {
  console.log(Math.max(...arr));
}

let arr1 = [1, 6, 3, 2];
displayMaxValue(arr1); // 6

let arr2 = [-1, -6, -3, -2];
displayMaxValue(arr2); // -1

let arr3 = [2, 2];
displayMaxValue(arr3); // 2