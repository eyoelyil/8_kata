// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function lowestSum(arr) {
  sortedArr = arr.sort((x, y) => x - y);
  return sortedArr[0] + sortedArr[1];
}

console.log(lowestSum([5, 2, 3, 4, 1, 10]));

//const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

// let num = [5, 4, 3, 2, 1];

// console.log(num.sort((x, y) => x - y));

function highestSum(arr) {
  sortedArr = arr.sort((x, y) => y - x);
  return sortedArr[0] + sortedArr[1];
}

console.log(highestSum([1, 2, 3, 4, 5]));
