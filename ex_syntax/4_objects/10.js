var MILLISEC_PER_MIN = 60000;
var MIN_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MIN_PER_DAY = HOURS_PER_DAY * MIN_PER_HOUR;
var DATE = new Date(0).toDateString() + ' ';

function afterMidnightt(timeStr) {
  var midnight = new Date(DATE + '00:00');
  var time = new Date(DATE + timeStr);

  return (time.getTime() - midnight.getTime()) / MILLISEC_PER_MIN;
}

function beforeMidnightt(timeStr) {
  var deltaMinutes = MIN_PER_DAY - afterMidnightt(timeStr);
  if (deltaMinutes === MIN_PER_DAY) deltaMinutes = 0;

  return deltaMinutes;
}

function afterMidnight(timeStr) {
  return Date.parse(DATE + timeStr + ' GMT') / MILLISEC_PER_MIN;
}

function beforeMidnight(timeStr) {
  return (MIN_PER_DAY - afterMidnight(timeStr)) % MIN_PER_DAY;
}


console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686