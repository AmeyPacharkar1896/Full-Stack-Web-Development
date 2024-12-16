const rentalTime = "1. 5days\n2. 2weeks\n3. 2months\n\nHow manys you wish to rent the book?";

const rentalPlanDetails = function (chooseBook, choice, totalSum) {
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
}

const closestAvailableCopy = function (bookDetail) {
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

export { rentalTime, rentalPlanDetails, closestAvailableCopy };