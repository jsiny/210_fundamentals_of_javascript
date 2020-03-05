function logObject(obj) {
  for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

function countOccurrences(arr) {
  const occurrences = {};

  arr.forEach((element) => {
    occurrences[element] = occurrences[element] || 0;
    occurrences[element] += 1;
  });

  logObject(occurrences);
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
