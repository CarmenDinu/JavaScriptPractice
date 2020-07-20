let firstUserInput = parseInt(prompt("Enter 1st number"));
let secondUserInput = parseInt(prompt("Enter 2nd number"));
let star = "*";

for (let i = 0; i < firstUserInput; i++) {
  let star1 = star.repeat(secondUserInput);
  console.log(star1);
  console.log(" ");
}
