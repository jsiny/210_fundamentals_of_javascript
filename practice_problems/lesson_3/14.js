function indexOf(firstString, secondString) {
  var m = firstString.length;
  var n = secondString.length;
  var limit = m - n;
  var i;
  var j;

  for (i = 0; i <= limit; i += 1) {
    matchCount = 0;

    for (j = 0; j < n; j += 1) {
      if (firstString[i + j] === secondString[j]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === n) return i;
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  // statements
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1