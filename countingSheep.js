function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.filter((n) => n === true).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

//*************************************** */

// function countSheeps(arr) {
//     return arr.filter(Boolean).length;
//   }

//************************************** */
