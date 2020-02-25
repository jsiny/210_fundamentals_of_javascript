function objectHasProperty(object, string) {
  return Object.keys(object).includes(string);
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

// Provided solution

function objectHasProperty(object, propertyName) {
  var keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}