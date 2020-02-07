// global variable scope

let greetingMessage = 'Good Morning!';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage
}

changeGreetingMessage('Good Evening');
greetPeople();

// local variable scope

function greetPerson(greetingSentence) {
  console.log(greetingSentence);
}

greetPerson('Good Morning');