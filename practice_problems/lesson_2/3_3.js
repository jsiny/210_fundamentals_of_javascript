function average(values) {
  return sum(values) / values.length;
}

function sum(values) {
  var total  = 0;

  for (var i = 0; i < values.length; i += 1) {
    total += values[i];
  }

  return total;
}

console.log(average([1, 3, 5, 9, 2]));

var temperatures = [73, 58, 81, 64, 67];
console.log(average(temperatures));
