const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                  'eighteen', 'nineteen'];

function alphabeticNumberSort(nums) {
  return nums.map(num => NUM_WORDS[num])
             .sort()
             .map(word => NUM_WORDS.indexOf(word));
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// --- Using sort(function) ---

function sortByNumWord(a, b) {
  if (a === b) return 0;
  return NUM_WORDS[a] < NUM_WORDS[b] ? -1 : 1;
}

function alphabetikNumberSort(nums) {
  return nums.sort(sortByNumWord);
}

console.log(alphabetikNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(alphabetikNumberSort(
  [0, 1, 0, 10, 11, 12, 12]));
// [11, 1, 10, 12, 12, 0,  0]

// --- Using sort() with a function expression ---

function alphabetickNumberSort(nums) {
  return nums.sort(function(a, b) {
    if (a === b) return 0;
    return NUM_WORDS[a] < NUM_WORDS[b] ? -1 : 1;
  })
}

console.log(alphabetickNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(alphabetickNumberSort(
  [0, 1, 0, 10, 11, 12, 12]));
// [11, 1, 10, 12, 12, 0,  0]