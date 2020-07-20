let userInput = prompt("Enter operation here");
let operationAndNumbers = userInput.split(" ");
let result = 0;

if (
  isNaN(
    parseInt(
      operationAndNumbers.slice(operationAndNumbers[1], userInput.length)
    )
  )
) {
  alert("Please enter a valid number");
} else if (operationAndNumbers[0] === "add") {
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
