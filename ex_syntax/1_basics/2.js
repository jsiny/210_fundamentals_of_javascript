var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}
// myBoolean is truthy (because true is truthy) therefore 'Hello' is output

if (!myString) {
  console.log('World');
}
// 'hello' is a truthy value but the bang operator negates it (falsy), therefore the branch inside the if statement is not executed.

if (!!myArray) {
  console.log('World');
}
// [] is a truthy value. !! negates its truthiness twice, hence it remains a truthy value. 'World' is output.

if (myOtherString || myArray) {
  console.log('!');
}
// '' is a falsy value, and [] is a truthy value. false || true is true therefore the branch within the if statement is executed and ! is printed.