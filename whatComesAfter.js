function comes_after(str) {
  let nextLetter = [];
  let word = str.toLowerCase().split(" ").join("");
  //   for (let n of word) {
  //     if (word[n] === "r") {
  //       nextLetter.push(word[n + 1]);
  //     }
  //   }
  word.foreach((n) => {
    if (word[n] === "r") {
      nextLetter.push(word[n + 1]);
    }
  });
  return nextLetter;
}

console.log(comes_after("are you really learning Ruby?"));
