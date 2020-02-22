function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  var newString = '';
  var charCode;
  var i = 0;

  for (i; i < string.length; i += 1) {
    charCode = string.charCodeAt(i);

    if (string[i].match(/[A-Z]/)) {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }
  
  return newString;
}


console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"