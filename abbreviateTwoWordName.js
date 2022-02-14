function abbrevName(name) {
  let arr = name.split(" ");
  let fname = arr[0].charAt(0).toUpperCase();
  let lname = arr[1].charAt(0).toUpperCase();
  return fname + "." + lname;
}

console.log(abbrevName("Sam Tom"));

//******************************************************** */

// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((x) => x.substr(0, 1).toUpperCase())
//     .join(".");
// }

//******************************************************** */

//******************************************************** */
