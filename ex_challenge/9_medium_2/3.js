function triangle(...angles) {
  const validTriangle = () => {
    return angles.every((n) => n > 0) &&
           angles.reduce((sum, angle) => sum + angle) === 180;
  };

  const triangleType = () => {
    if (angles.includes(90))         return 'right';
    if (angles.every((n) => n < 90)) return 'acute';
    return 'obtuse';
  }

  return validTriangle() ? triangleType() : 'invalid';
}

console.log(triangle(60, 70, 50)  === "acute");
console.log(triangle(30, 90, 60)  === "right");
console.log(triangle(120, 50, 10) === "obtuse");
console.log(triangle(0, 90, 90)   === "invalid");
console.log(triangle(50, 50, 50)  === "invalid");
