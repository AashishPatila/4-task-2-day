//Write a program that prompts the user to enter two numbers and compute the basic arithmetic operations like sum, subtraction, multiplication, division, percentage of one number to the other number of the two numbers. Modify the program to use the back tick operator to display the result of the addition.
const prompt = require ("prompt-sync")({sigint:true});
var num1 = prompt("enter the first number :");
var num2 = prompt("enter the second number:");
num1 = parseInt(num1)
nium2 = parseInt(num2)
let add = num1 + num2;
console.log(add);
let subtract = num1 - num2;
console.log(subtract);
let multiply = num1 * num2;
console.log(multiply);
let divide = num1 / num2;
console.log(divide);
let percent = (num1/num2)*100;
console.log(percent);