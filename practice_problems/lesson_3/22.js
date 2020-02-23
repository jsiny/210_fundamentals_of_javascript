function rot13(string) {
  var rotation = 13;
  var newString = '';
  var char;
  var rotatedChar;
  var offset;
  var i;

  for (i = 0; i < string.length; i += 1) {
    char = string[i];

    if (char.match(/[A-Z]/)) {
      offset = 'A'.charCodeAt(0);
    } else if (char.match(/[a-z]/)) {
      offset = 'a'.charCodeAt(0);
    } else {
      newString += char;
      continue;
    }

    rotatedChar = rotateChar(char, offset, rotation);
    newString += rotatedChar;
  }

  return newString;
}

function rotateChar(char, offset, rotation) {
  var NUMBER_OF_LETTERS = 26;
  var initialCharCode;
  var rotatedCharCode;
  var rotatedChar;

  initialCharCode = char.charCodeAt(0);
  rotatedCharCode = (initialCharCode - offset + rotation) % NUMBER_OF_LETTERS + offset;
  rotatedChar     = String.fromCharCode(rotatedCharCode);

  return rotatedChar;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.

console.log(rot13('123')) // 123