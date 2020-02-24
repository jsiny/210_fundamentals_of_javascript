function getGrade(a, b, c) {
  var score = (a + b + c) / 3;
  var letter;

  if (score >= 90) {
    letter = 'A';
  } else if (score >= 80) {
    letter = 'B';
  } else if (score >= 70) {
    letter = 'C';
  } else if (score >= 60) {
    letter = 'D';
  } else {
    letter = 'F';
  }

  return letter;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"