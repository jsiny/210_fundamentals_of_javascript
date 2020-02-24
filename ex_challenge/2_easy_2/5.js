// First implementation

function triangle(size) {
  var white;
  var line;
  var i;

  for (i = 1; i <= size; i += 1) {
    white = size - i;
    line = repeat(' ', white) + repeat('*', i);
    console.log(line);
  }
}

function repeat(character, number) {
  var line = '';
  var i;

  for (i = 0; i < number; i += 1) {
    line += character;
  }

  return line;
}

// Second implementation

function triangle(size) {
  var line;
  var i;

  for (i = 1; i <= size; i += 1) {
    line = '*'.repeat(i).padStart(size);
    console.log(line);
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********