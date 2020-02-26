function greetings(array, object) {
  var name = array.join(' ');
  var status = object.title + ' ' + object.occupation;

  console.log(`Hello, ${name}! Nice to have a ${status} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
