var phrase = prompt('Please enter a phrase: ');
var newPhrase = phrase.replace(/[^a-zA-Z]/g, '');
var length = newPhrase.length;

console.log(`There are ${length} characters in ${phrase}`);