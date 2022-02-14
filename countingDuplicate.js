// function duplicateCount(text) {
//   text = text.toLowerCase();
//   for (let i = 0; i < text.length; i++) {
//     for (let j = i + 1; j < text.length - 1; j++) {
//       return text[i] === text[j];
//     }
//   }
// }

// console.log(duplicateCount("aba"));

const counts = {};
const sampleArray = ["a", "a", "b", "c"];
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);

//
let num = {};
num = [2, 3];
console.log(typeof (num + 1));
