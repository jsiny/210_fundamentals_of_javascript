function random(min, max) {
  var temp;
  
  if (min > max) {
    temp = min;
    min = max;
    max = temp;
  }  else if (min === max) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(random(45, -8));
console.log(random(-3, -89));
console.log(random(10, 111));
console.log(random(1, 89));
console.log(random(8, 8));