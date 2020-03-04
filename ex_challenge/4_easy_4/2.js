function copyWithoutDuplicates(result, array) {
  array.forEach(el => { if (!result.includes(el)) result.push(el); });
}

function union(...arrays) {
  const result = [];
  arrays.forEach(arr => copyWithoutDuplicates(result, arr));
  return result;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
