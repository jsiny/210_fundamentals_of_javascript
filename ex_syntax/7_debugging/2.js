function includesFalse(list) {
  for (let i = 0; i < list.length; i += 1) {
    const element = list[i];
    if (element === false) return true;
  }

  return false;
}

console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false])); // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null])); // false

// 0 == false returns true because of type coercion (false => 0)
// abstract equality operator ==
