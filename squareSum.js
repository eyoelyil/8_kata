// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers) {
//   let mapped = numbers.map((x) => x ** 2);
//   return mapped.reduce((x, y) => x + y, 0);
// }

// console.log(squareSum([1, 2, 2]));

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

console.log(squareSum([1, 2, 2]));
