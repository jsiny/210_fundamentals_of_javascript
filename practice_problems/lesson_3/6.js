function fizzbuzz() {
  var message;

  for (let i = 1; i <= 100; i += 1) {
    message = '';

    if (i % 3 === 0) message += 'Fizz';
    if (i % 5 === 0) message += 'Buzz';

    console.log(message || i);
  }
}

fizzbuzz();
