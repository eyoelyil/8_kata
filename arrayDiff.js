function arrayDiff(a, b) {
  let finalArr = [];
  //loop through first array
  // if an element in array a is not in b, keep it

  a.forEach((ele) => {
    if (!b.includes(ele)) {
      //finalArr = finalArr.concat(ele);
      finalArr.push(ele);
    }
  });
  return finalArr;
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
