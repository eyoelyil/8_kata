function calculate(num1, operation, num2) {
  //TODO: make a basic calculator.
  if (num2 === 0 && operation === "/") {
    return null;
  } else if (operation === "w")
    if (operation === "+") {
      return num1 + num2;
    } else if (operation === "-") {
      return num1 - num2;
    } else if (operation === "*") {
      return num1 * num2;
    } else if (operation === "/") {
      return num1 / num2;
    } else {
      null;
    }
}

console.log(calculate(2, "+", 4));
console.log(calculate(6, "-", 1.5));
console.log(calculate(-4, "*", 8));
console.log(calculate(2, "+", 0));
