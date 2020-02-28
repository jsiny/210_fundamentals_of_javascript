const read = function read(pages) {
  console.log('You started reading.');
  for (let i = 0; i < pages; i += 1) {
    const message = `You read page ${i}`;
    console.log(message);
  }
};

read(400);
