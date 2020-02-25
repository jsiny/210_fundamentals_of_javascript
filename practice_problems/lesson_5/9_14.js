function formatTime(date) {
  var hours = String(date.getHours()).padStart(2, 0);
  var minutes = String(date.getMinutes()).padStart(2, 0);

  return hours + ':' + minutes;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));