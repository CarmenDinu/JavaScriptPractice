let userInput = prompt("Enter operation here");
let positionOftheFirstSpace = userInput.indexOf(" ");

console.log(positionOftheFirstSpace);
let operationType = userInput.slice(0, positionOftheFirstSpace);

console.log(operationType);
