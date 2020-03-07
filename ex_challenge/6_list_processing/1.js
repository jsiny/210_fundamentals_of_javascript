function sum(num) {
  return [...String(num)].reduce((sum, n) => sum + parseInt(n, 10), 0);
}

function summ(num) {
  return [...`${num}`].reduce((sum, n) => sum + +(n), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
