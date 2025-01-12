const { askQuestion, rl } = require("./readlineLogic");

const calculator = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => {
    if (b === 0) throw new Error("Division by zero is not allowed.");
    return a / b;
  },
  modulus: (a, b) => a % b,
};

async function calculatorLogic() {
  console.log("What operation do you wish to perform?\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus\n6. Exit");

  const userChoice = parseInt(await askQuestion('Enter your choice: '));
  let firstElement, secondElement;

  if (userChoice >= 1 && userChoice <= 5) {
    firstElement = parseFloat(await askQuestion('Enter first number: '));
    secondElement = parseFloat(await askQuestion('Enter second number: '));
  }

  switch (userChoice) {
    case 1: return calculator.addition(firstElement, secondElement);
    case 2: return calculator.subtraction(firstElement, secondElement);
    case 3: return calculator.multiplication(firstElement, secondElement);
    case 4: return calculator.division(firstElement, secondElement);
    case 5: return calculator.modulus(firstElement, secondElement);
    case 6: return 6;
    default:
      console.log("Wrong Input. Please choose a correct operation.");
      return null;
  }
}

async function calculatorDriver() {
  let result;
  do {
    result = await calculatorLogic();
    if (result === 6) break;
    if (result !== null) console.log("The result for the selected operation is: " + result);
  } while (result !== 6);
}

module.exports.calculatorDriver = calculatorDriver;
