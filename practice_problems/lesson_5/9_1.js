var today = new Date();

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);
  var dayNum = formattedDayNum(date);

  console.log(`Today's date is ${day}, ${month} ${dayNum}`);
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDayNum(date) {
  var suffix;
  var day = date.getDay();

  if ([11, 12, 13].includes(day)) suffix = 'th';

  switch (day % 10) {
    case 1:  suffix = 'st';
    case 2:  suffix = 'nd';
    case 3:  suffix = 'rd';
    default: suffix = 'th';
  }

  return String(day) + suffix;
}

formattedDate(today);
