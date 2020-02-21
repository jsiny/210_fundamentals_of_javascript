var password = 'password';
var failedAttempts = 0;
var guess;

while (true) {
  guess = prompt('What is the password?');

  if (guess === password) {
    console.log('You have successully logged in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}