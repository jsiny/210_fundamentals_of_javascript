var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName); // Bob, Bob

// Strings are immutable in Javascript

// --- Further Exploration ---

// When we call a method on a primitive value, JS temporarily coerces the primitive value to its object counterpart. This coercion allows us to use object methods on primitive values instead of manually creating a String. 