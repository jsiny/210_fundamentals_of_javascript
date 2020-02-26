function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // Welcome
    anotherOne(116, 111); // to
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // the
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33); // Matrix!

// Here are the various successive function calls:

// 1. one();
// 2. anotherAnotherOne(); => Welcome
// 3. anotherOne(116, 111);
// 4. log(result); => to
// 5. anotherOne(116, 104, 101);
// 6. log(result); => the
// 7. anotherOne(77, 97, 116, 114, 105, 120, 33);
// 8. log(result); => Matrix!

// The last line is actually just two successive functoin calls (because the one function returns the anotherOne function).