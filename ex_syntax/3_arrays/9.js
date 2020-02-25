function oddities(array) {
  var oddElements = [];
  var i;

  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// Even though `oddities[2, 3, 4, 5, 6]` do return `[2, 4, 6]`, JavaScript
// returns `false` when the two elements are compared with the === operator.

// The reason is that, for two arrays to be equal, it needs to be the SAME
// array (ie. the same object) - not that their values are equal.