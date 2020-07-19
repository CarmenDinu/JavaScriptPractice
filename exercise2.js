// LET declaraction

let userInput = prompt("Enter operation here");

// Declaration of the fist space in order to obtain the operation type
let positionOftheFirstSpace = userInput.indexOf(" ");
let operationType = userInput.slice(0, positionOftheFirstSpace).toLowerCase();

// Declaration of the numbers

let numbers = userInput.slice(positionOftheFirstSpace + 1, userInput.length);
numbers = numbers.split(" ");

if ((operationType = "sum")) {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum = sum + parseInt(numbers[i]);
  }

  alert(sum);
} else {
  ("Enter valid operation");
}
