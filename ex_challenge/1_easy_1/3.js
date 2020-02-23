var SQ_METERS_TO_SQ_FEET = 10.7639;
var length;
var width;
var area_in_meters;
var area_in_feet;

length = parseFloat(prompt('Enter the length of the room in meters:'), 10);
width  = parseFloat(prompt('Enter the width of the room in meters:'), 10);

console.log(length);
console.log(width);

area_in_meters = length * width;
area_in_feet = area_in_meters * SQ_METERS_TO_SQ_FEET;

console.log(`The area of the room is ${area_in_meters.toFixed(2)} square meters (${area_in_feet.toFixed(2)} square feet)`);
