import { menuItems, menuPrices, menuOrdered, menuString } from "./menu.js";
import { displayBill } from "./calculate_bill.js";
import { cardPayment, upiPayment, cashPayment } from './payment_functions.js';

alert("Welcome to Hotel Celebration. I'm Amey, your host today.");

let menuLength = menuItems.length;
menuLength++;
console.log(menuLength);
let dishChoice = 0;
let noOfPlates = 0;
let totalSum = 0;

do {
  dishChoice = prompt("Here is our menu\n" + menuString + "\n\nPlease select the number you wish to order");
  if (dishChoice == menuLength) {
    break;
  } else if (dishChoice < menuLength) {
    dishChoice--;
    noOfPlates = prompt("How many of " + menuItems[dishChoice] + " would you like to order?");
    menuOrdered[dishChoice] += noOfPlates;
    menuPrices[dishChoice] *= noOfPlates;
    totalSum += menuPrices[dishChoice];
  } else {
    alert("Please choose appropriate dish");
  }
} while ((dishChoice != menuLength));


let paymentStatus = false;
let newBillTotalSum = 0;
if (totalSum != 0) {
  do {
    newBillTotalSum = displayBill(menuLength, totalSum);
  } while (newBillTotalSum == totalSum);
  do {
    let paymentMethod = Number(prompt("How you would you like to pay?\n1.Card\n2.UPI\n3.Cash\n\nEnter the option you wish to choose"))
    switch (paymentMethod) {
      case 1:
        paymentStatus = cardPayment(newBillTotalSum);
        break;
      case 2:
        paymentStatus = upiPayment(newBillTotalSum);
        break;
      case 3:
        paymentStatus = cashPayment(newBillTotalSum);
        break;
      default:
        alert("Choose appropriate payment method");
        break;
    }
  } while (!paymentStatus);
  alert("Thank you for dinning with us this evening. Hope to have you soon.");
} else {
  alert("Atleast buy water if you are entering.");
  alert("Thank you.");
}