function transpose(matrix) {
  const result = [];
  const nbArrays = matrix[0].length;

  for (let x = 0; x < nbArrays; x += 1) {
    result.push([]);
  }

  matrix[0].forEach((a, idxRow) => {
      matrix.forEach((b, idxColumn) => {
        result[idxRow][idxColumn] = matrix[idxColumn][idxRow];
      })
    }
  );

  return result;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]