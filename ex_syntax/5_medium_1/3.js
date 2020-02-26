var row;
var i;
var j;

for (i = 1; i <= 10; i += 1) {
  row = '';
  for (j = 1; j <= 10; j += 1) {
    row += String(i * j).padStart(2) + ' ';
  }

  console.log(row + '\n');
}