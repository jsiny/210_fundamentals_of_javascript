function upperCaseIfLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

upperCaseIfLong('hello world!');
upperCaseIfLong('hiiii');

function capsLong(string) {
  return string.length > 10 ? string.toUpperCase() : string;
}

capsLong('hello world!');
capsLong('hiiii');