const paymentOptions = "1. Card\n2.UPI\n3.Cash\n\nHow would you like to pay?";

const paymentFunction = function (newBillTotalSum = 0) {
  let paymentStatus = false;

  if (newBillTotalSum != 0) {
    do {
      let paymentMethod = parseInt(prompt("Rental Price for all the book is " + newBillTotalSum + "\n\n" + paymentOptions));
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
    alert("Thank you for renting the books from us. Hope to see you soon.");
  } else {
    alert("Atleast rent a book if you are entering.");
    alert("Thank you.");
  }
}

const cardPayment = function (totalSum = 0) {
  let cardNumber = prompt("Enter your card number : ");
  if (cardNumber.length != 16) {
    alert("Wrong card number it must be 16digits. Payment Failed");
    return false;
  } else {
    let cardCVV = prompt("Enter cvv number");
    if (cardCVV.length != 3) {
      alert("Wrong cvv. Payment Failed");
      return false;
    } else {
      let confirmation = prompt(`Your amount is ${totalSum}. Do you wish to proceed Y/N`);
      confirmation = confirmation.toUpperCase();
      console.log(confirmation);
      if (confirmation == 'Y') {
        alert("Payment Sucessfull!");
        return true;
      } else if (confirmation == 'N') {
        alert("Payment Failed.");
        return false;
      } else {
        alert("Invalid choice. Payment Fail.");
        return false;
      }
    }
  }
}

const upiPayment = function (totalSum = 0) {
  alert("Here is our UPI-Number 9820324828\nThe total amount would be : " + totalSum);
  alert("Payment Successfull.");
  return true;
}

const cashPayment = function (totalSum = 0) {
  alert("The total amount would be : " + totalSum);
  alert("Cash Received");
  return true;
}

export { paymentFunction };