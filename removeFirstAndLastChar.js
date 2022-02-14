// function removeChar(str) {
//   let removedArr = [];
//   let arr = str.split("");
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (i > 0 && i < arr.length) removedArr.push(str[i]);
//   }
//   return removedArr.join("");
// }

//********************************************************** */
// function removeChar(str) {
//   return str.substring(1, str.length - 1);
// }

//********************************************************** */

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("hello"));
