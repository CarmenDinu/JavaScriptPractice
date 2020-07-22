// [EXERCISE]
// - capture 2 numbers from 2 different prompts (number1 and number2)
// - print number1 lines on the screen where each line has number2 stars
// example
// 2 2
// **
// **

// 4 4
// ****
// ****
// ****
// ****

// 1 4
// *
// *
// *
// *

let firstUserInput = parseInt(prompt("Enter 1st number"));
let secondUserInput = parseInt(prompt("Enter 2nd number"));
let star = "*";

for (let i = 0; i < firstUserInput; i++) {
  let star1 = star.repeat(secondUserInput);
  console.log(star1);
  console.log(" ");
}

// if (numberOfRows > 0) {
//   let numberOfRows = parseUnt(prompt("Enter 1st number"));
//   let numberOfColumns = parseUnt(prompt("Enter 12nd number"));
//   for (let i = 1; i <= numberOfRows; i++) {
//     for (let j = 1; j <= numberOfColumns; j++) {
//       document.write(star);
//     }
//   }
// } else {
//   console.log("Error!");
// }
