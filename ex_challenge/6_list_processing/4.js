function sum(nums) {
  return nums.reduce((total, n) => total + n);
}

function sumOfSums(nums) {
  return sum(nums.map((n, i) => sum(nums.slice(0, i + 1))));
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
