// [EXERCISE]
// - capture 1 numer from prompt
// - make a sum of all the numbers between 1 and the number
// example
// 4
// 1+2+3+4 = 10
// 5
// 1+2+3+4+5 = 15
// 1.2
// error
// -4
// error

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
