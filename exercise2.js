// LET declaraction

let userInput = prompt("Enter operation here");

// Declaration of the fist space in order to obtain the operation type
let positionOftheFirstSpace = userInput.indexOf(" ");
let operationType = userInput.slice(0, positionOftheFirstSpace).toLowerCase();

// Declaration of the numbers

let numbers = userInput.slice(positionOftheFirstSpace + 1, userInput.length);
numbers = numbers.split(" ");

if (operationType === "add") {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + parseInt(numbers[i]);
  }
  alert(sum);
} else if (operationType === "multiply") {
  let sub = 0;
  for (i = 0; i < numbers.length; i++) {
    sub = sub - parseInt(numbers[i]);
  }
  alert(sub);
} else if (operationType === "subtract") {
  let mul = 1;
  for (i = 0; i < numbers.length; i++) {
    mul = mul * parseInt(numbers[i]);
  }
  alert(mul);
} else {
  alert("Enter valid operation");
}
