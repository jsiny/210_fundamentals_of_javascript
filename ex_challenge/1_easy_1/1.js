var i;

for (i = 1; i < 100; i += 2) {
  console.log(i);
}

// --- Further Exploration ---

function logOddNumbers(min, max) {
  var num;

  for (num = min; num <= max; num += 1) {
    if (num % 2 === 1) console.log(num);
  }
}

logOddNumbers(1, 99);
logOddNumbers(3, 13);