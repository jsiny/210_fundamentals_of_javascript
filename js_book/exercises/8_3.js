let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The problem occurs on line 3 where we assign 1 to counter within the conditional part of the while loop.
// JavaScript accepts this code since the assignment always returns a truthy value (1), so the loop condition never becomes false.
// Plus, the break is never executed because counter is always reassigned to 1 at the beginning of the loop.