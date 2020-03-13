function staggeredCase(string) {
  return string.replace(/[a-z]/gi, (char, idx) => {
    return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  });
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"