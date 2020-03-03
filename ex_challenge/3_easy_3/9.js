function countElements(array, item) {
  return array.filter((elements) => elements === item).length;
}

function wordSizes(sentence) {
  if (!sentence) return {};

  const lengths = sentence.split(' ').map((word) => word.length);
  const count = {};

  lengths.forEach((length) => count[length] = countElements(lengths, length));

  return count;
}

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}
