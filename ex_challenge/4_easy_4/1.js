const MIN_PER_DEGREE = 60;
const SEC_PER_MIN = 60;

function dms(degreesFloat) {
  let result;

  const degrees = Math.floor(degreesFloat);
  result = `${degrees}°`;

  const minutesFloat = (degreesFloat - degrees) * MIN_PER_DEGREE;
  const minutes = Math.floor(minutesFloat);
  result += `${String(minutes).padStart(2, '0')}'`;

  const secondsFloat = (minutesFloat - minutes) * SEC_PER_MIN;
  const seconds = Math.floor(secondsFloat);
  result += `${String(seconds).padStart(2, '0')}"`;

  return result;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
