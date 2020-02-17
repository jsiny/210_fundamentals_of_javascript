function getDayOfWeek(date) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

let date1 = new Date('December 25, 2000');
console.log(getDayOfWeek(date1));

let date2 = new Date('November 30, 1993');
console.log(getDayOfWeek(date2));
