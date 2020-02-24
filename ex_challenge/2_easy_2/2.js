function logInBox(string) {
  var length = string.length;

  logLine(length, '+', '-');
  logLine(length, '|', ' ');
  logSentence(string);
  logLine(length, '|', ' ');
  logLine(length, '+', '-');
}

function logLine(length, firstPattern, secondPattern) {
  var border = firstPattern;
  var i;

  for (i = 0; i < length + 2; i += 1) {
    border += secondPattern
  }

  border += firstPattern;
  console.log(border);  
}

function logSentence(string) {
  var sentence = '| ' + string + ' |'
  console.log(sentence);
}

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');

// +--+
// |  |
// |  |
// |  |
// +--+