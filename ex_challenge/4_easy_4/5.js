function interleave(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i += 1) {
    result.push(first[i], second[i]);
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]

// --- With flatMap() ---

function intertwine(first, second) {
  return first.flatMap((x, i) => [x, second[i]]);
}

console.log(intertwine([1, 2, 3], ['a', 'b', 'c']));
