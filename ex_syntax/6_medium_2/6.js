var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item>]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty items>]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty item>, 'Python' ]
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// The length property can be explicitly set.
// Setting the length to a lesser value truncates the array. Resetting the length property to a higher value does not bring back the truncated elements. 
// Setting the length to a value greater than the current length creates 'empty items' in the array, but the number of actual elements does not increase.