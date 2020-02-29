const tasks = 10;
let checkmarks = 0;
let sessions = 0;
let minutes = 0;

function pomodoro() {
  let rest;

  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log(`... ${minutes}`);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log(`Rest for ${rest} minutes.`);

  minutes = 0;
  pomodoro();
}

pomodoro();
