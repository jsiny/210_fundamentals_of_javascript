if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// Possible paths: 
// - condition 1 => condition 2
// - condition 1 => else
// - else
// - else => condition4
// - else => condition4 => condition5
