let age = 20;

console.log('You are ' + age + ' years old.');

for (let decades = 1; decades < 5; decades++) {
  let years = decades * 10
  console.log(`In ${years} years, you will be ${age + years} years old.`);
};