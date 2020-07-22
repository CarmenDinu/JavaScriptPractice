// [EXERCISE]
// - capture a string from prompt
// - reverse the letters using a for loop (do not use string split, reverse functions)
// example
// hello => olleh

let input = prompt();
for (let i = input.length; i >= 0; i--) {
  console.log(input[i]);
}
