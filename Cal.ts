import chalk from "chalk";
import inquirer from "inquirer";

import add from "./Add.js";
import substract from "./Subtract.js";
import multiply from "./Multiply.js";
import divide from "./Divide.js";



const calculator = await inquirer.prompt([
  {
    name: "firstNumber",
    type: "number",
    message: "Enter the first number",
  },
  {
    name: "secondNumber",
    type: "number",
    message: "Enter the second number",
  },
  {
    name: "select",
    type: "checkbox",
    message: "Do you want to add, substract, multiply or divide?",
    choices: ["Add", "Substract", "Multiply", "Divide"],
  },
]);

console.log(chalk.green.bold.bgYellowBright.underline(calculator.firstNumber));
console.log(chalk.underline.red.bgWhite.bold(calculator.secondNumber));
console.log(chalk.underline.blueBright.bgGreen.bold(calculator.select));

if (calculator.select == "Add") {
  console.log(add(calculator.firstNumber, calculator.secondNumber));
} else if (calculator.select == "Substract") {
  console.log(substract(calculator.firstNumber, calculator.secondNumber));
} else if (calculator.select == "Multiply") {
  console.log(multiply(calculator.firstNumber, calculator.secondNumber));
} else if (calculator.select == "Divide") {
  console.log(divide(calculator.firstNumber, calculator.secondNumber));
}