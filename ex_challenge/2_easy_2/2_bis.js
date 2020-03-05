function line(ending, pattern, size) {
  console.log(ending + pattern.repeat(size) + ending);
}

function padRight(line, length) {
  white = length - line.length;
  line += ' '.repeat(white);
  line += ' |'
  return line;
}

function wrapSentence(sentence, length) {
  let chars = sentence.length;
  let words = sentence.split(' ');
  let count = 0;
  let line = '| ';

  for (let i = 0, word, wordLen, white; i < words.length; i += 1) {
    word = words[i] + ' ';
    wordLen = word.length;

    if (line.length + wordLen > length - 2) { 
      line = padRight(line, length);
      console.log(line);
      line = '| ';
      count = 0;
    }

    line += word;
    count += wordLen;
  }
  
  line = padRight(line, length);
  
  if (line) console.log(line);
}

function logInBox(sentence, max = 80) {
  let strLen = sentence.length;
  let len = strLen + 2;

  let length = Math.min(len, max);

  line('+','-', length);
  line('|',' ', length);

  if (sentence === '') {
    line('|',' ', length);
  } else {
    wrapSentence(sentence, length);
  }

  line('|',' ', length);
  line('+','-', length);
}

let str = 'An unnamed narrator approaches the house of Usher on a “dull, dark, and soundless day.” This house—the estate of his boyhood friend, Roderick Usher—is gloomy and mysterious. The narrator observes that the house seems to have absorbed an evil and diseased atmosphere from the decaying trees and murky ponds around it.'

logInBox(str, 50);


logInBox('To boldly go where no one has gone before.');
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+