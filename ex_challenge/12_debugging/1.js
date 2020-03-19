var ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(function(word) {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // head-heal-teal-tell-tall-tail
