let userInput = prompt("Enter Numbers Here");
let sum = 0;

if (userInput > 0) {
  if (userInput % 1 === 0) {
    for (let i = 0; i <= parseInt(userInput); i++) {
      sum = sum + i;
    }
    alert(sum);
  } else {
    alert("Please add an integer number");
  }
} else {
  alert("Please enter a positive number!");
}
