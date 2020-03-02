function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function teddy() {
  const age = getRandom(20, 200);
  console.log(`Teddy is ${age} years old!`);
}

teddy();
