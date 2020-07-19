// LET declaraction

let userInput = prompt("Enter operation here");

// Declaration of the fist space in order to obtain the operation type
let positionOftheFirstSpace = userInput.indexOf(" ");
let operationType = userInput.slice(0, positionOftheFirstSpace).toLowerCase();

// Declaration of the fist space in order to obtain the first and the second number
let positionOftheSecondSpace = userInput.indexOf(
  " ",
  positionOftheFirstSpace + 1
);

let firstNumber = userInput.slice(
  positionOftheFirstSpace + 1,
  positionOftheSecondSpace
);

let secondNumber = userInput.slice(
  positionOftheSecondSpace + 1,
  userInput.length
);

//IF Statements

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Please enter valid numbers");
} else if (operationType === "add") {
  result = parseInt(firstNumber) + parseInt(secondNumber);
  alert(`Addition result is ${result}`);
} else if (operationType === "subtract") {
  result = parseInt(firstNumber) - parseInt(secondNumber);
  alert(`Subtraction result is ${result}`);
} else if (operationType === "multiply") {
  result = parseInt(firstNumber) * parseInt(secondNumber);
  alert(`Multiplication result is ${result}`);
} else {
  alert("Operation not valid");
}
