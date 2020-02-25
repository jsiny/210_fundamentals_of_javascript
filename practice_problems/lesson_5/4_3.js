function copyProperties(object, copy) {
  var propertyNames = Object.keys(object);

  propertyNames.forEach(name => copy[name] = object[name]);

  return propertyNames.length;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

// Provided solution

function copyPropertiz(source, destination) {
  var property;
  var count = 0;
  
  for (property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

var kal = {};
console.log(copyPropertiz(hal, kal));
console.log(kal);