var MILLISEC_PER_MIN = 60000;

function timeOfDay(min) {
  var dateValue = new Date(2020, 1, 26, 0, 0, 0, 0).valueOf();
  var new_date = new Date(dateValue + min * MILLISEC_PER_MIN);
  var hours = formatTime(new_date.getHours());
  var minutes = formatTime(new_date.getMinutes());

  return hours + ':' + minutes;
}

function formatTime(hoursOrMin) {
  return String(hoursOrMin).padStart(2, '0');
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"