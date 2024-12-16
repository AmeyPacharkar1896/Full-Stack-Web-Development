
import { bookRentalSystem } from "./book_rental_system.js";

let bookString = '';

bookRentalSystem.bookList.forEach((bookDetails) => {
  bookString += `${bookDetails.id}. ${bookDetails.name}  ₹${bookDetails.price}/per day\n`;
});

bookString += `${bookRentalSystem.bookList.length + 1}. That would be all\n\nEnter the number of book you wish to rent`;

let choice = 0, rentalPlan = 0;
let chooseBook;
let totalSum = 0;
let newBillTotalSum = 0;
let totalBooks = 0;
let billString = '';

do {
  choice = parseInt(prompt(bookString));
  if (choice === bookRentalSystem.bookList.length + 1) break;

  if (choice > 0 && choice <= bookRentalSystem.bookList.length) {
    chooseBook = bookRentalSystem.bookList[choice - 1];
    if (billString.length != 0) {
      let repeatingBook = billString.indexOf(chooseBook.name);
      if (repeatingBook != -1) {
        alert("We apologize, but we can't rent same book twice at once.");
        continue;
      }
    }
    if (chooseBook.isAvailable) {
      do {
        totalSum = newBillTotalSum;
        rentalPlan = parseInt(prompt(bookRentalSystem.rentalTime));
        newBillTotalSum = bookRentalSystem.rentalPlan.rentalPlanDetails(chooseBook, rentalPlan, totalSum);
      } while (newBillTotalSum == totalSum);

      totalBooks++;
      // Calculate billString
      billString = bookRentalSystem.generateBill.generateBill(totalBooks, chooseBook, rentalPlan, billString);

    } else {
      alert(`We apologize, but ${chooseBook.name} is currently unavailable. Available on ${bookRentalSystem.rentalPlan.closestAvailableCopy(chooseBook)}`);
    }
  } else {
    alert("Invalid choice. Please select a valid book number.");
  }
} while (choice !== bookRentalSystem.bookList.length + 1);

if (newBillTotalSum != 0) {
  newBillTotalSum = bookRentalSystem.generateBill.calculateFinalBill(newBillTotalSum, totalBooks, billString);
  console.log(newBillTotalSum);
}

// Final payment
bookRentalSystem.paymentFunctions.paymentFunction(newBillTotalSum);


// import { bookList } from './book_data.js';
// import { paymentFunction } from './payment_functions.js';
// import { rentalTime, rentalPlanDetails, closestAvailableCopy } from './rent_plan.js';
// import { generateBill, calculateFinalBill } from './generate_bill.js';

// import { bookRentalSystem } from "./book_rental_system";

// let bookString = '';

// bookList.forEach((bookDetails) => {
//   bookString += `${bookDetails.id}. ${bookDetails.name}  ₹${bookDetails.price}/per day\n`;
// });

// bookString += `${bookList.length + 1}. That would be all\n\nEnter the number of book you wish to rent`;

// let choice = 0, rentalPlan = 0;
// let chooseBook;
// let totalSum = 0;
// let newBillTotalSum = 0;
// let totalBooks = 0;
// let billString = '';

// do {
//   choice = parseInt(prompt(bookString));
//   if (choice === bookList.length + 1) break;
//   if (choice > 0 && choice <= bookList.length) {
//     chooseBook = bookList[choice - 1];

//     if (chooseBook.isAvailable) {
//       do {
//         totalSum = newBillTotalSum;
//         rentalPlan = parseInt(prompt(rentalTime));
//         newBillTotalSum = rentalPlanDetails(chooseBook, rentalPlan, totalSum);
//       } while (newBillTotalSum == totalSum);
//       totalBooks++;

//       //calculate billString
//       billString = generateBill(totalBooks, chooseBook, rentalPlan, billString);

//     } else {
//       alert(`We apologize, but ${chooseBook.name} is currently unavailable. Available on ${closestAvailableCopy(chooseBook)}`);
//     }
//   } else {
//     alert("Invalid choice. Please select a valid book number.");
//   }
// } while (choice !== bookList.length + 1);

// //calculating final bill
// newBillTotalSum = calculateFinalBill(newBillTotalSum, totalBooks, billString);

// //final payment
// paymentFunction(newBillTotalSum);