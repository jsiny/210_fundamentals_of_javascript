var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// 3.4 and -2 are valid property names but not valid indices. As such, they are not counted within the length property of an array. Indeed, the length property is equal to the highest index + 1, and the length remains at 3.
// Object.keys(array) however returns an array of all the property names of the array, ie. the indices and the other property names (like 3.4). As such, its value is incremented.