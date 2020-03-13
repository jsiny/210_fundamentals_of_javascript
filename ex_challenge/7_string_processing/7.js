function staggeredCase(string) {
  let k = -1;

  return [...string].reduce((str, char) => {
    if (/[a-z]/i.test(char)) {
      k += 1;
      return (k % 2 === 0 ? str + char.toUpperCase() : str + char.toLowerCase());
    } else {
      return str + char;
    }
  }, '');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
