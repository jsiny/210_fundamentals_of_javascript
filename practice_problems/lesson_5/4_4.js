function wordCount(string) {
  var words = string.split(' ');
  var count = {};
  var i;

  for (i = 0; i < words.length; i += 1) {
    incrementProperty(count, words[i])
  }

  return count;
}

function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }