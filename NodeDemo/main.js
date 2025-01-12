const { askQuestion, rl } = require("./readlineLogic");
const { calculatorDriver } = require("./calculatorLogic");
const {changeWord} = require("./wordChangeLogic");

async function main() {
  let userChoice;
  do {
    userChoice = parseInt(await askQuestion("What do you wish to do?\n1. Use Calculator\n2. Change a word from the written paragraph\n3. Exit\n"));
    switch (userChoice) {
      case 1:
        await calculatorDriver();
        break;
      case 2:
        await changeWord();
        break;
      case 3:
        console.log("All done? Good luck");
        break;
      default:
        console.log("Wrong option");
        break;
    }
  } while (userChoice != 3);
  rl.close();
}

main();
