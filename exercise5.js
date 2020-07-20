let input = parseInt(prompt("number"));
let numbers = [];
numbers.push(input);
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum = sum + parseInt(numbers[i]);
}
