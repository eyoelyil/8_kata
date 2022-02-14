function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let avg = classPoints.reduce((x, y) => x + y) / classPoints.length;
  return yourPoints > avg;
}

console.log(betterThanAverage([70, 85, 60], 30));

// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
//   }
