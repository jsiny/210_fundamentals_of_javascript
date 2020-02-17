function allMatches(words, pattern) {
  return words.reduce((matches, word) => {
    if (pattern.test(word)) {
      matches.push(word);
    }
    return matches;
  }, []);
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']

// With filter

function filterMatches(words, pattern) {
  return words.filter(word => pattern.test(word));
}

console.log(filterMatches(words, /lab/));