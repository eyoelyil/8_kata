// Given a non-empty array of integers, return the result of multiplying the values together in order
// Example [1,2,3]  => 1*2*3 => 6

function grow(arr) {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    num *= arr[i];
  }
  return num;
}

console.log(grow([1, 2, 1, 4]));

// with reduce method
function multiplesArr(arr) {
  return arr.reduce((x, y) => x * y);
}

console.log(multiplesArr([1, 2, 3, 4]));
