// Create a function with two arguments that will return an array of the first (n) multiples of (x)
// countByX(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countByX(2,5)  === [2,4,6,8,10]

function countByX(x, n) {
  let arr = [];
  for (let i = x; i <= x * n; i += x) {
    arr.push(i);
  }
  return arr;
}

console.log(countByX(2, 5));
