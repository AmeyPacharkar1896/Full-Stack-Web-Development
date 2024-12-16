const paymentOptions = "1. Card\n2.UPI\n3.Cash\n\nHow would you like to pay?";

const bookRentalSystem = {
  bookList: [
    {
      id: 1,
      name: "Spare",
      author: "Prince Harry",
      price: 50.0, // per-day rental price
      rentalPeriod: [
        { id: '1A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '1B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '1C', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 3,
      isAvailable: true,
      availableCopy: 3,
    },
    {
      id: 2,
      name: "Atomic Habits",
      author: "James Clear",
      price: 35.0,
      rentalPeriod: [
        { id: '2A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '2B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '2C', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '2D', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '2E', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '2F', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '2G', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 7,
      isAvailable: true,
      availableCopy: 7,
    },
    {
      id: 3,
      name: "It Starts with Us",
      author: "Colleen Hoover",
      price: 25.0,
      rentalPeriod: [
        { id: '3A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '3B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '3C', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '3D', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '3E', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 5,
      isAvailable: true,
      availableCopy: 5,
    },
    {
      id: 4,
      name: "The Body Keeps the Score",
      author: "Bessel van der Kolk",
      price: 15.0,
      rentalPeriod: [
        { id: '4A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '4B', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 2,
      isAvailable: true,
      availableCopy: 2,
    },
    {
      id: 5,
      name: "Lessons in Chemistry",
      author: "Bonnie Garmus",
      price: 40.0,
      rentalPeriod: [
        { id: '5A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '5B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '5C', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '5D', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '5E', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '5F', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '5G', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '5H', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 8,
      isAvailable: true,
      availableCopy: 8,
    },
    {
      id: 6,
      name: "Dune",
      author: "Frank Herbert",
      price: 30.0,
      rentalPeriod: [
        { id: '6A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '6B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '6C', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '6D', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 4,
      isAvailable: true,
      availableCopy: 4,
    },
    {
      id: 7,
      name: "The Book Thief",
      author: "Markus Zusak",
      price: 20.0,
      rentalPeriod: [
        { id: '7A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '7B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '7C', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '7D', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '7E', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '7F', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 6,
      isAvailable: true,
      availableCopy: 6,
    },
    {
      id: 8,
      name: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 25.0,
      rentalPeriod: [
        { id: '8A', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 1,
      isAvailable: true,
      availableCopy: 1,
    },
    {
      id: 9,
      name: "The 48 Laws of Power",
      author: "Robert Greene",
      price: 30.0,
      rentalPeriod: [
        { id: '9A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '9B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '9C', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 3,
      isAvailable: true,
      availableCopy: 3,
    },
    {
      id: 10,
      name: "The Silent Patient",
      author: "Alex Michaelides",
      price: 35.0,
      rentalPeriod: [
        { id: '10A', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '10B', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '10C', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '10D', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '10E', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '10F', isRented: false, rentalPeriod: 0, rentedAt: null },
        { id: '10G', isRented: false, rentalPeriod: 0, rentedAt: null },
      ],
      totalCopy: 7,
      isAvailable: true,
      availableCopy: 7,
    }
  ],
  rentalTime: "1. 5days\n2. 2weeks\n3. 2months\n\nHow manys you wish to rent the book?",
  rentalPlan: {
    rentalPlanDetails: (chooseBook, choice, totalSum) => {
      let dateChanged = false;
      chooseBook.rentalPeriod.forEach((rentalPeriod) => {
        if (!dateChanged) {
          if (!rentalPeriod.isRented) {
            dateChanged = true;
            rentalPeriod.isRented = true;
            switch (choice) {
              case 1:
                rentalPeriod.rentalPeriod = 5;
                break;
              case 2:
                rentalPeriod.rentalPeriod = 14;
                break;
              case 3:
                rentalPeriod.rentalPeriod = 60;
                break;
              default:
                alert("Please select correct rental period.")
                return totalSum;
            }
            totalSum += chooseBook.price * rentalPeriod.rentalPeriod;
            rentalPeriod.rentedAt = new Date();
          }
        }
      });
      chooseBook.availableCopy--;
      console.log(chooseBook.availableCopy);
      if (chooseBook.availableCopy == 0) {
        chooseBook.isAvailable = false;
        console.log(chooseBook.isAvailable);
      }
      return totalSum;
    },
    closestAvailableCopy: (bookDetail) => {
      let dateList = [];

      bookDetail.rentalPeriod.forEach((rentalDetail) => {
        if (rentalDetail.isRented && rentalDetail.rentedAt) {
          const returnDate = new Date(rentalDetail.rentedAt);
          returnDate.setDate(returnDate.getDate() + rentalDetail.rentalPeriod);
          dateList.push(returnDate);
        }
      });

      if (dateList.length === 0) return null;

      let closestDate = dateList[0];
      dateList.forEach((date) => {
        if (date < closestDate) {
          closestDate = date;
        }
      });

      return closestDate;
    }
  },
  generateBill: {
    generateBill: (totalBooks = 0, books, rentalPlan = 0, billString = '') => {
      if (totalBooks != 0) {
        switch (rentalPlan) {
          case 1:
            billString += `${totalBooks}. ${books.name}: ${books.price * 5}\n`;
            break;
          case 2:
            billString += `${totalBooks}. ${books.name}: ${books.price * 14}\n`;
            break;
          case 3:
            billString += `${totalBooks}. ${books.name}: ${books.price * 60}\n`;
            break;
        }
        return billString;
      }
    },
    calculateFinalBill: (newBillTotalSum = 0, totalBooks = 0, billString = '') => {
      if (newBillTotalSum != 0) {
        billString += `Total Price :    ${newBillTotalSum}\n`;

        if (totalBooks >= 5) {
          newBillTotalSum -= (newBillTotalSum * (10 / 100));
          billString += `\nDiscounted Price(10%) :    ${newBillTotalSum}\n`;
        } else if (totalBooks >= 2) {
          newBillTotalSum -= (newBillTotalSum * (5 / 100));
          billString += `\nDiscounted Price(5%) :    ${newBillTotalSum}\n`;
        }

        billString += `\nCGST   2.5%    ${(newBillTotalSum * (2.5 / 100))}\nSGST    2.5%    ${(newBillTotalSum * (2.5 / 100))}`;
        newBillTotalSum += newBillTotalSum * (5 / 100);
        billString += `\nTotal Price : ${newBillTotalSum}`;

        alert("Your bill is\n" + billString);
        return newBillTotalSum;
      }
    }
  },
  paymentFunctions: {
    paymentFunction: (totalAmount) => {
      if (totalAmount <= 0) {
        console.log(totalAmount);
        alert("Please rent a book first.");
        return; // Exit if no books are rented
      }
      console.log(totalAmount); 
      let paymentStatus = false;
      while (!paymentStatus) {
        const paymentMethod = parseInt(prompt(paymentOptions));
        switch (paymentMethod) {
          case 1:
            paymentStatus = bookRentalSystem.paymentFunctions.cardPayment(totalAmount);
            break;
          case 2:
            paymentStatus = bookRentalSystem.paymentFunctions.upiPayment(totalAmount);
            break;
          case 3:
            paymentStatus = bookRentalSystem.paymentFunctions.cashPayment(totalAmount);
            break;
          default:
            alert("Choose an appropriate payment method");
        }
      }
      alert("Thank you for renting the books from us. Hope to see you soon.");
    },
    cardPayment: (amount) => {
      const cardNumber = prompt("Enter your card number (16 digits): ");
      if (cardNumber.length !== 16) {
        alert("Invalid card number.");
        return false; // Return false for invalid input
      }
      const cardCVV = prompt("Enter CVV number (3 digits): ");
      if (cardCVV.length !== 3) {
        alert("Invalid CVV.");
        return false;
      }
      return this.confirmPayment(amount);
    },
    upiPayment: (totalSum = 0) => {
      alert("Here is our UPI-Number 9820324828\nThe total amount would be : " + totalSum);
      alert("Payment Successfull.");
      return true;
    },
    cashPayment: (totalSum = 0) => {
      alert("The total amount would be : " + totalSum);
      alert("Cash Received");
      return true;
    }
  },
}

export { bookRentalSystem };