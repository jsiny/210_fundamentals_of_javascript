function countElements(array, item) {
  return array.filter((elements) => elements === item).length;
}

function wordSizes(sentence) {
  if (!sentence) return {};

  const lengths = sentence.split(' ').map((word) => word.replace(/[^a-z]/gi, '').length);
  const count = {};

  lengths.forEach((length) => count[length] = countElements(lengths, length));

  return count;
}

wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "5": 1, "2": 1, "3": 1 }
wordSizes(''); // {}
