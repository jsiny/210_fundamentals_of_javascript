function swapCharCase(char) {
  return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
}

function swapCase(string) {
  return [...string].map(swapCharCase).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapKase(string) {
  return string.replace(/[a-z]/gi, char => {
    return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
  });
}

console.log(swapKase('CamelCase'));              // "cAMELcASE"
console.log(swapKase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"