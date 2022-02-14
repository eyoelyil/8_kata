// //destructuring array
// const num = [1, 2, 3, 4, 5, 6, 7];

// // const firstPlace = num[0]
// // const secondPlace = num[1]

// const [gold, silver, bronze, ...rest] = num;

// console.log(gold);
// console.log(typeof silver);
// console.log(rest);

// destructuring object

const person = {
  first: "Robi",
  last: "Blance",
  age: 30,
  study: true,
  address: "Haahkatie",
};

const { first, last, address, ...restInfo } = person;

console.log(first);
console.log(address);
console.log(restInfo);
