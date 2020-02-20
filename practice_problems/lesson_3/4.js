function multiplesOfThreeAndFive(min, max) {
  for (var i = min; i <= max; i += 1) {
    if (i % 15 === 0) {
      console.log(String(i) + '!');
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive(3, 51);
