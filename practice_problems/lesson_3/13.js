function generatePattern(n) {
  var string;

  for (var i = 1; i <= n; i += 1) {
    string = '';

    for (var j = 1; j <= i; j += 1) {
      string += String(j);
    }

    for (var k = 0; k < n - i; k += 1) {
      string += '*';
    }

    console.log(string);
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// --- Further Exploration ---

function generatePatt(n) {
  var lastRowString = '';
  var width;
  var string;
  var stars;
  var i;
  var j;
  var k;

  for (i = 1; i <= n; i += 1) {
    lastRowString += String(i);
  }

  width = lastRowString.length;

  for (i = 1; i <= n; i += 1) {
    string = '';

    for (j = 1; j <= i; j += 1) {
      string += String(j);
    }

    stars = width - string.length;

    for (k = 1; k <= stars; k += 1) {
      string += '*';
    }

    console.log(string);
  }
}

generatePatt(12);

// console output
// 1**************
// 12*************
// 123************
// 1234***********
// 12345**********
// 123456*********
// 1234567********
// 12345678*******
// 123456789******
// 12345678910****
// 1234567891011**
// 123456789101112