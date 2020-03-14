function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;

  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(digits, n) {
  let result       = String(digits).split('');
  const index      = result.length - n;
  const rotatedArr = rotateArray(result.splice(index));

  result = result.concat(rotatedArr);
  return Number(result.join(''));
}

function maxRotation(num) {
  for (let i = String(num).length; i > 1; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }

  return num;
}

console.log(maxRotation(735291)     === 321579);
console.log(maxRotation(3)          === 3);
console.log(maxRotation(35)         === 53);
console.log(maxRotation(105)        === 15);
console.log(maxRotation(8703529146) === 7321609845);
