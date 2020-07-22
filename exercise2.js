// [EXERCISE]
// - capture an operation from prompt (add, substract, multiply), followed by numbers split by space
// - print the result of the operation
// - print error if one of the numbers is not a number
// - print error if the action is incorrect
// - example "add 1 33 2 4" prints 38
// - example "add 1 33 2 4 3 2 2" prints 45
// - example "adds 1 33" prints error
// - example "add 1f 33" prints error

let userInput = prompt("Enter operation here");
let operationAndNumbers = userInput.split(" ");
let result = 0;
let invalidNumbersInInput = false;
for (let i = 1; i < operationAndNumbers.length; i++) {
  if (isNaN(operationAndNumbers[i])) {
    invalidNumbersInInput = true;
    alert("Enter a valid number");
  }
}

if (invalidNumbersInInput === false) {
  if (operationAndNumbers[0] === "add") {
    for (i = 1; i < operationAndNumbers.length; i++) {
      result = result + parseInt(operationAndNumbers[i]);
    }
    alert(`Addition result is ${result}`);
  } else if (operationAndNumbers[0] === "multiply") {
    result = 1;
    for (i = 1; i < operationAndNumbers.length; i++) {
      result = result * parseInt(operationAndNumbers[i]);
    }
    alert(`Multiplication result is ${result}`);
  } else if (operationAndNumbers[0] === "subtract") {
    result = operationAndNumbers[1];
    for (i = 2; i < operationAndNumbers.length; i++) {
      result = result - parseInt(operationAndNumbers[i]);
    }
    alert(`Subtraction result is ${result}`);
  } else {
    alert("Enter valid operation");
  }
}
