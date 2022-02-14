function isIsogram(str) {
  //if empty return true.
  if (str.isEmpty) {
    return true;
  } else {
    // All lower case.
    str = str.toLowerCase();
  }
  //split string into individual characters.
  var array = str.split("");
  var sortedArr = array.slice().sort();

  for (var i = 0; i < array.length; i++) {
    //if duplicate is found return false.
    if (sortedArr[i + 1] == sortedArr[i]) {
      return false;
    }
  }
  //else return true
  return true;
}
