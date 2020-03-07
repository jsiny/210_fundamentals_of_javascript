function multiplyAllPairs(arr1, arr2) {
  let products = [];

  arr1.forEach(x => { 
    arr2.forEach(y => products.push(x * y))
  })

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]
