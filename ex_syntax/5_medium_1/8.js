function productOfSums(array1, array2) {
  return total(array1) * total(array2);
}

function total(numbers) {
  return numbers.reduce((sum, value) => sum + value);
}

console.log(productOfSums([1, 2, 3], [10, 20, 30]));  // 360