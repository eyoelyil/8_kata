// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  const sortArr = str.toLowerCase().split("").sort();

  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i + 1] === sortArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("abcdeff"));

//*************************************************************************** */
