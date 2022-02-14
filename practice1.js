function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let avg = classPoints.reduce((x, y) => x + y) / classPoints.length;
  return yourPoints > avg;
}

console.log(betterThanAverage([70, 85, 60], 30));

var arr = [
  "a",
  "b",
  "c",
  "d",
  "d",
  "e",
  "a",
  "b",
  "c",
  "f",
  "g",
  "h",
  "h",
  "h",
  "e",
  "a",
];
var map = arr.reduce(function (prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

// map is an associative array mapping the elements to their frequency:
console.log(map);
// prints {"a": 3, "b": 2, "c": 2, "d": 2, "e": 2, "f": 1, "g": 1, "h": 3}
