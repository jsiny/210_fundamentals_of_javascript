function cleanUp(string) {
  var lastCharIsRemoved = false;
  var newString = '';
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (string[i].match(/[a-zA-Z]/)) {
      lastCharIsRemoved = false;
      newString += string[i];
    } else if (!lastCharIsRemoved) {
      newString += ' ';
      lastCharIsRemoved = true;
    }
  }

  return newString;
}

// Much shorter solution

function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' '); 
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "