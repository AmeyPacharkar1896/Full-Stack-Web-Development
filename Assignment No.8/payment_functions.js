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

export { cardPayment, upiPayment, cashPayment };