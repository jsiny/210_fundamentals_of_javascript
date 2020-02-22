function rot13(string) {
  var newString = '';
  var char;
  var rotatedChar;
  var offset;
  var i;

  for (i = 0; i < string.length; i += 1) {
    char = string[i];

    if (char.match(/[^a-zA-Z]/)) {
      newString += char;
      continue;
    } else if (char.match(/[a-z]/)) {
      offset = 97;
    } else {
      offset = 65;
    }

    rotatedChar = rotateCharBy13(char, offset);
    newString += rotatedChar;
  }

  return newString;
}

function rotateCharBy13(char, offset) {
  var initialCharCode;
  var rotatedCharCode;
  var rotatedChar;

  initialCharCode = char.charCodeAt(0);
  rotatedCharCode = (initialCharCode - offset + 13) % 26 + offset;
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