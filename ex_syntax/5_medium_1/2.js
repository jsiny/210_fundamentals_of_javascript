// var i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else {
//     i += 1;
//   }
// }

// This code will get stuck at i === 0 because 0 is divisible by 3 and the increment part is in the else branch.

// Here's the fixed version:

var i = 0;
while (i < 10) {
  if (i % 3 === 0) console.log(i);
  i += 1;
}