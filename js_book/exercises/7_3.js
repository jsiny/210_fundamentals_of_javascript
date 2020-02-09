function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('NaN');
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(4);
evenOrOdd(3);
evenOrOdd('hi');