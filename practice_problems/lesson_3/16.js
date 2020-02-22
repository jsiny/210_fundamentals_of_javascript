function splitString(string, delimiter) {
  var subString = '';
  var i;

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (i = 0; i < string.length; i += 1) {
    if (string[i] === delimiter) {
      console.log(subString);
      subString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      subString += string[i];
    }
  }
  
  if (subString !== '') console.log(subString);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello