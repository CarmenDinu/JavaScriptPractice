// [EXERCISE]
// - capture a number from prompt
// - display in the following format stars
// 5
// * * * * *
// * * * *
// * * *
// * *
// *

// 3
// * * *
// * *
// *

// -1
// error

let userInput = parseInt(prompt("No here "));
let star = "*";
if (userInput > 0) {
  for (i = userInput; i > 0; i--) {
    console.log(star.repeat(i));
  }
} else {
  console.log("Error");
}
