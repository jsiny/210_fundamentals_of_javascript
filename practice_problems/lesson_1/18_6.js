var apples = 3;
var bananas = '3';

if (apples === bananas) {
  console.log('Strictly Equal!');
} else {
    if (apples == bananas) {
      console.log('Same value but different types')
    } else {
      console.log('They\'re different...');
    }
}