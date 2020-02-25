function slice(array, begin, end) {
  var newArr = [];
  var i;

  if (begin > array.length) begin = array.length;
  if (end > array.length)     end = array.length;

  for (i = begin; i < end; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

var arr = [1, 2, 3];
slice(arr, 1, 3);                     // [2, 3]
console.log(arr);                     // [1, 2, 3]




function splice(array, start, deleteCount) {
  if (start > array.length) start = array.length;
  if (deleteCount > array.length - start) deleteCount = array.length - start;

  var arrayCopy = slice(array, 0, array.length);
  var elementCount = arguments.length - 3;
  var newLength = array.length + elementCount - deleteCount;
  var copyBackCount;
  var removed;
  var i;

  array.length = newLength;

  for (i = 0; i < elementCount; i += 1) {
    array[start + i] = arguments[3 + i];
  }

  copyBackCount = arrayCopy.length - start - deleteCount;

  for (i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  removed = slice(arrayCopy, start, start + deleteCount);
  console.log(removed);
  return removed;
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

var arr = [1, 2, 3];
splice(arr, 1, 1, 'two');             // [2]
console.log(arr);                     // [1, "two", 3]

var arr = [1, 2, 3];
splice(arr, 1, 2, 'two', 'three');    // [2, 3]
console.log(arr);                     // [1, "two", "three"]

var arr = [1, 2, 3];
splice(arr, 1, 0);                    // []
splice(arr, 1, 0, 'a');               // []
console.log(arr);                     // [1, "a", 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');               // []
console.log(arr);                     // ["a", 1, 2, 3]


// After looking at the other submissions

function splic(array, start, deleteCount, ...values) {
  start       = Math.min(start, array.length);
  deleteCount = Math.min(deleteCount, array.length - start);

  var deleted = slice(array, start, start + deleteCount);
  var rest    = slice(array, start + deleteCount, array.length);

  array.length = start;
  array.push(...values);
  array.push(...rest);

  console.log(deleted);
  return deleted;
}

splic([1, 2, 3], 1, 2);              // [2, 3]
splic([1, 2, 3], 1, 3);              // [2, 3]
splic([1, 2, 3], 1, 0);              // []
splic([1, 2, 3], 0, 1);              // [1]
splic([1, 2, 3], 1, 0, 'a');         // []

var arr = [1, 2, 3];
splic(arr, 1, 1, 'two');             // [2]
console.log(arr);                     // [1, "two", 3]

var arr = [1, 2, 3];
splic(arr, 1, 2, 'two', 'three');    // [2, 3]
console.log(arr);                     // [1, "two", "three"]

var arr = [1, 2, 3];
splic(arr, 1, 0);                    // []
splic(arr, 1, 0, 'a');               // []
console.log(arr);                     // [1, "a", 2, 3]

var arr = [1, 2, 3];
splic(arr, 0, 0, 'a');               // []
console.log(arr);                     // ["a", 1, 2, 3]