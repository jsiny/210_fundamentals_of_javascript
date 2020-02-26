function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}

console.log(doubler(5, 'Victor'));                   // returns 10
// logs:
// This function was called by Victor.

var doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.