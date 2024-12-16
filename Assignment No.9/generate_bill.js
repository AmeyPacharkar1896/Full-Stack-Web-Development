const generateBill = function (totalBooks = 0, books, rentalPlan = 0, billString = '') {
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
}


const calculateFinalBill = function (newBillTotalSum = 0, totalBooks = 0, billString = '') {
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

export { generateBill, calculateFinalBill };